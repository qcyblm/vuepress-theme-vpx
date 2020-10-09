const path = require('path')
const yaml = require('js-yaml');
const CARD_LINKS = 'cardLinks';
const CARD_LINK = 'cardLink';
const CARD_LIST = 'cardList';
const CARD_IMG_LIST = 'cardImgList';

// Theme API.
module.exports = (options, ctx) => {
  const { themeConfig, siteConfig } = ctx

  // resolve algolia
  const isAlgoliaSearch = (
    themeConfig.algolia
    || Object
      .keys(siteConfig.locales && themeConfig.locales || {})
      .some(base => themeConfig.locales[base].algolia)
  )

  const enableSmoothScroll = themeConfig.smoothScroll === true

  return {
    alias() {
      return {
        '@AlgoliaSearchBox': isAlgoliaSearch
          ? path.resolve(__dirname, 'components/AlgoliaSearchBox.vue')
          : path.resolve(__dirname, 'noopModule.js')
      }
    },

    plugins: [
      ['@vuepress/active-header-links', options.activeHeaderLinks],
      '@vuepress/search',
      '@vuepress/plugin-nprogress',
      ['container', {
        type: 'info',
        defaultTitle: {
          '/': '信息',
          '/en/': 'Info'
        }
      }],
      ['container', {
        type: 'tip',
        defaultTitle: {
          '/': '提示',
          '/en/': 'TIP'
        }
      }],
      ['container', {
        type: 'warning',
        defaultTitle: {
          '/': '注意',
          '/en/': 'WARNING'
        }
      }],
      ['container', {
        type: 'danger',
        defaultTitle: {
          '/': '警告',
          '/en/': 'WARNING'
        }
      }],
      ['container', {
        type: 'details',
        before: info => `<details class="custom-block details">${info ? `<summary>${info}</summary>` : ''}\n`,
        after: () => '</details>\n',
        defaultTitle: {
          '/': '点击查看',
          '/en/': 'DETAILS'
        }
      }],
      ['container', {
        type: 'center',
        before: info => `<div class="center-container">`,
        after: () => '</div>'
      }],
      ['container', {
        type: 'theorem',
        before: info => `<div class="custom-block theorem"><p class="title">${info}</p>`,
        after: '</div>'
      }],
      ['container', {
        type: 'right',
        defaultTitle: ''
      }],
      [
        'container',
        {
          type: CARD_LINK,
          render: (tokens, idx) => {
            return renderCardList(tokens, idx, CARD_LINK)
          }
        },
      ],
      [
        'container',
        {
          type: CARD_LINKS,
          render: (tokens, idx) => {
            return renderCardList(tokens, idx, CARD_LINKS)
          }
        },
      ],
      [
        'container',
        {
          type: CARD_LIST,
          render: (tokens, idx) => {
            return renderCardList(tokens, idx, CARD_LIST)
          }
        },
      ],
      [
        'container',
        {
          type: CARD_IMG_LIST,
          render: (tokens, idx) => {
            return renderCardList(tokens, idx, CARD_IMG_LIST)
          }
        },
      ],
      ['smooth-scroll', enableSmoothScroll]
    ]
  }
}
// 渲染md容器的卡片列表
function renderCardList(tokens, idx, type) {
  const END_TYPE = `container_${type}_close`,
    _tokens$idx = tokens[idx],
    nesting = _tokens$idx.nesting,
    info = _tokens$idx.info;

  if (nesting === 1) { // 渲染开头的 ':::' 标记
    let yamlStr = '';

    for (let i = idx; i < tokens.length; i++) {
      let _tokens$i = tokens[i],
        type = _tokens$i.type,
        content = _tokens$i.content,
        _info = _tokens$i.info;
      if (type === END_TYPE) break; // 遇到结束的 ':::' 时
      if (!content) continue;
      if (type === 'fence' && _info === 'yaml') { // 是代码块类型，并且是yaml代码
        yamlStr = content
      }
    }

    if (yamlStr) { // 正确解析出yaml字符串后
      const dataObj = yaml.safeLoad(yamlStr) // 将yaml字符串解析成js对象
      let dataList = []

      if (dataObj) { // 正确解析出数据对象
        dataList = Array.isArray(dataObj) ? dataObj : dataObj.list
      }

      if (dataList && dataList.length) { // 有列表数据

        // 每行显示几个
        let row = Number(info.split(' ').pop())
        if (!row || row > 4 || row < 1) {
          row = 3 // 默认 3
        }

        let listDOM = ''
        if (type === CARD_LINK) { // 普通卡片列表1
          listDOM = getCardLinkDOM(dataList)
        } else if(type === CARD_LINKS) { // 普通卡片列表2
          listDOM = getCardLinksDOM(dataList, row)
        } else if(type === CARD_LIST) { // 普通卡片列表3
          listDOM = getCardListDOM(dataList, row)
        } else if (type === CARD_IMG_LIST) { // 卡片图片列表
          listDOM = getCardImgListDOM(dataList, row)
        }

        return `<div class="${type}Container"><div class="card-list">${listDOM}</div>`
      }
    }
  } else { // 渲染':::' 结尾
    return '</div>'
  }
}

// 将数据解析成DOM结构 - 普通卡片列表1
function getCardLinkDOM(dataList) {
  let listDOM = ''
  dataList.forEach(item => {
    listDOM += `
      <${item.link ? 'a href="' + item.link + '" title="' + item.link + '"' : 'span'} class="card-item"
         style="${item.bgColor ? 'background-color:' + item.bgColor + ';' : ''}"
      >
        <p class="name" style="${item.nameColor ? 'color:' + item.nameColor + ';' : ''}">${item.name}</p>
      </${item.link ? 'a' : 'span'}>
   `
  })
  return listDOM
}

// 将数据解析成DOM结构 - 普通卡片列表2
function getCardLinksDOM(dataList, row) {
  let listDOM = ''
  dataList.forEach(item => {
    listDOM += `
      <${item.link ? 'a href="' + item.link + '" title="' + item.link + '" target="_blank"' : 'span'} class="card-item ${row ? 'row-' + row : ''}"
         style="${item.bgColor ? 'background-color:' + item.bgColor + ';' : ''}"
      >
        ${item.avatar ? '<img src="' + item.avatar + '" class="no-zoom">' : ''}
        <div>
          <p class="name" style="${item.nameColor ? 'color:' + item.nameColor + ';' : ''}">${item.name}</p>
          <p class="desc" style="${item.textColor ? 'color:' + item.textColor + ';' : ''}">${item.desc}</p>
        </div>
      </${item.link ? 'a' : 'span'}>
    `
  })
  return listDOM
}

// 将数据解析成DOM结构 - 普通卡片列表3
function getCardListDOM(dataList, row) {
  let listDOM = ''
  dataList.forEach(item => {
    listDOM += `
      <${item.link ? 'a href="' + item.link + '" title="' + item.link + '" target="_blank"' : 'span'} class="card-item ${row ? 'row-' + row : ''}"
         style="${item.bgColor ? 'background-color:' + item.bgColor + ';' : ''}"
      >
        ${item.avatar ? '<img src="' + item.avatar + '" class="no-zoom">' : ''}
        <div>
          <p class="name" style="${item.nameColor ? 'color:' + item.nameColor + ';' : ''}">${item.name}</p>
          <p class="desc" style="${item.textColor ? 'color:' + item.textColor + ';' : ''}">${item.desc}</p>
        </div>
      </${item.link ? 'a' : 'span'}>
    `
  })
  return listDOM
}

// 将数据解析成DOM结构 - 图文卡片列表
function getCardImgListDOM(dataList, row) {
  let listDOM = ''
  dataList.forEach(item => {
    listDOM += `
      <div class="card-item ${row ? 'row-' + row : ''}" >
        <div class="box-img">
          <a href="${item.link}" title="${item.link}" target="_blank">
            <img src="${item.img}" class="no-zoom">
          </a>
        </div>

        ${item.name || item.desc
        ? `<div class="box-info"
              style="${item.bgColor ? 'background-color:' + item.bgColor + ';' : ''}">
              <a href="${item.link}" title="${item.link}" target="_blank">
              ${item.name ? `<p class="name" style="${item.nameColor ? 'color:' + item.nameColor + ';' : ''}">${item.name}</p>` : ''}
              ${item.desc ? `<p class="desc" style="${item.textColor ? 'color:' + item.textColor + ';' : ''}">${item.desc}</p>` : ''}
              </a>
            </div>`
        : ''
      }
        
        ${item.avatar || item.author
        ? `<div class="box-footer"
             style="${item.authorbgColor ? 'background-color:' + item.authorbgColor + ';' : ''}">
              <a href="${item.authorLink || item.link}" title="${item.authorLink || item.link}" target="_blank">
                ${item.avatar ? `<img src="${item.avatar}" class="no-zoom">` : ''}
                ${item.author ? `<span style="${item.authorColor ? 'color:' + item.authorColor + ';' : ''}">${item.author}</span>` : ''}
              </a>
            </div>`
        : ''
      }
      </div>
    `
  })
  return listDOM
}