const moment = require('moment')
moment.locale("zh-cn");
module.exports = {
  base: '/vuepress-theme-vpx/',
  temp: '.temp',
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
    editLinkText: '编辑当前页',
    edit: {
      docsPlatform: 'https://github.com/',
      docsRepo: 'qcyblm/vuepress-theme-vpx',
      docsBranch: 'master',
      docsDir: 'src',
    },
    lastUpdated: '最后更新时间',
    footer:{
      licensedLink: 'https://github.com/qcyblm/vuepress-theme-vpx/blob/master/LICENSE',
      licensed: 'MIT',
      createYear: '2020',
      author: 'qcyblm',
      authorLink: 'https://github.com/qcyblm',
      copyright: [
        {
          text: '个人主页',
          link: 'https://qcyblm.github.io/'
        }
      ]
    }
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
