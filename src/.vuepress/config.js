const moment = require('moment')
moment.locale("zh-cn");
module.exports = {
  base: '/vuepress-theme-vpx/',
  locales: {
    '/': {
      lang: 'zh-CN',
    }
  },
  title: 'vuepress-theme-vpx',
  description: '一款基于 VuePress 开发的主题',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  temp: '.temp',
  dest: 'docs',
  theme: '@qcyblm/vpx',
  themeConfig: {
    logo: '/assets/img/logo.png',
    BackToTop: true,
    nav: [
      { text: '首页', icon: 'fa fa-home', link: '/' },
      { text: '指南', icon: 'fa fa-book', link: '/guide/' },
      { text: '配置', icon: 'fa fa-cogs', link: '/config/' }
    ],
    sidebar: {
      '/guide/': getGuideSidebar('指南'),
    },
    repo: {
      platform: 'https://github.com/',
      icon: 'fab fa-github',
      owner: 'qcyblm',
      repositories: 'vuepress-theme-vpx',
    },
    editLinks: true,
    edit: {
      text: '编辑当前页',
      docsRepo: 'vuepress-theme-vpx',
      docsBranch: 'master',
      docsDir: 'src',
    },
    lastUpdated: '最后更新时间',
    footer:{
      createYear: '2020',
      author: 'qcyblm',
      authorLink: 'https://github.com/qcyblm',
      copyrightInfo: '<br>Powered by <a href="https://www.vuepress.cn/" target="_blank" rel="noopener noreferrer" >VuePress</a>',
      licensedLink: 'https://github.com/qcyblm/vuepress-theme-vpx/blob/master/LICENSE.md',
      licensed: 'MIT',
    },
    socialIcons:[
      { type: 'QQ', link: 'https://qm.qq.com/cgi-bin/qm/qr?k=Y2yALNrc-xC9Wj9wsLRp7fPSFhqsO9GH&jump_from=webapi' },
      { type: 'GitHub', link: 'https://github.com/qcyblm/' }
    ]
  },
  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp) => {
          return moment(timestamp).format("LLLL")
        }
      }
    ],
    ['vuepress-plugin-code-copy',
      {
        align: 'bottom',
        color: 'rgba(255,255,255,0.4)',
        backgroundTransition: 'bottom',
        backgroundColor: '#0075b8',
        successText: '复制成功',
        staticIcon: false,
      }
    ],
  ],
}

function getGuideSidebar(groupA) {
  return [
    {
      title: groupA,
      collapsable: false,
      icon: 'fa fa-book',
      children: [
        '',
        'markdown',
        'ads'
      ]
    },
  ]
}
