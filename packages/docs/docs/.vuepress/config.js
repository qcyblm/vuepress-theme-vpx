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
  dest: '../../docs',
  theme: '@qcyblm/vpx',
  themeConfig: {
    logo: '/assets/img/logo.png',
    nav: [
      { text: '首页', icon: 'fa fa-home', link: '/' },
      { text: '指南', icon: 'fa fa-book', link: '/guide/' },
      { text: '配置', icon: 'fa fa-cogs', link: '/config/' },
    ],
    sidebar: {
      '/guide/': getGuideSidebar('指南'),
    },
    repoPlatform: 'Github',
    repoicon: 'fab fa-github',
    repo: 'qcyblm/vuepress-theme-vpx',
    docsRepo: 'qcyblm/vuepress-theme-vpx',
    docsDir: 'packages/docs/docs/',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: '编辑当前页'
  },
}

function getGuideSidebar(groupA) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        '',
        'getting-started',
        'markdown',
      ]
    },
  ]
}
