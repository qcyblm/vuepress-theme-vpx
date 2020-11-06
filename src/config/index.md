---
sidebarDepth: 0
sidebar: auto
icon: fa fa-cogs
---
# 主题扩展配置
## 首页
默认的主题提供了一个首页 (Homepage) 的布局。想要使用它，需要在你的根级 `README.md` 的 YAML front matter 指定 `home: true`。以下是一个如何使用的例子：

``` yaml
---
home: true
heroImage: /hero.png
heroText: Hero 标题
tagline: Hero 副标题
action: # (可选)
- text: ''
  link: ''
  icon: ''  # 图标 (可选)
- text: ''
  link: ''
  icon: ''
- text: ''
  link: ''
  icon: ''
features:  # (可选，3 列多行)
- title: 标题
  desc: 描述  # (支持 html 渲染解析标签支持)
  link: 链接  # (可选，启动时禁用描述 html 渲染解析标签支持)
  imgUrl: 图片链接  # (可选)
footerWrap: # footer 底部栏 (可选，需启动 footer 支持，4 列多行)
- title: 标题
  icon: fa fa-book  # 图标 (可选)
  item:
  - text: 名称
    link: 链接
    desc: 描述  # (可选)
socialIcons:  # 社交图标，显示于页脚栏 (可选，需启动 footer 支持)
- type: ''  # 社交平台
  link: ''  # 社交链接
---
```
### 社交图标
目前支持 15 个社交平台

type | icon | type | icon | type | icon
:-: | :-: | :-: | :-: | :-: | :-:
Email | <i class="fa fa-envelope"></i> | GitHub | <i class="fab fa-github"></i> | GitLab | <i class="fab fa-gitlab"></i>
WeChat | <i class="fab fa-weixin"></i> | QQ | <i class="fab fa-qq"></i> | Weibo | <i class="fab fa-weibo"></i>
Music | <i class="fa fa-music"></i> | Twitter | <i class="fab fa-twitter"></i> | Telegram | <i class="fab fa-telegram"></i>
LinkedIn | <i class="fab fa-linkedin"></i> | YouTube | <i class="fab fa-youtube-square"></i> | Facebook | <i class="fab fa-facebook-square"></i>
Instagram | <i class="fab fa-instagram"></i> | CodePen | <i class="fab fa-codepen"></i> | Medium | <i class="fab fa-medium"></i>

你可以将相应的内容设置为 `null` 来禁用标题和副标题。

任何 `YAML front matter` 之后额外的内容将会以普通的 markdown 被渲染，并插入到 `socialIcons` 的后面。

## 导航栏
### 导航栏链接
新增 icon 图标，图标库 [Font Awesome](https://fontawesome.com/)，示例：
``` js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    nav: [
      { text: 'Home', link: '/', icon: 'fa fa-home' },
    ]
  }
}
```

## 侧边栏
侧边栏分组新增 icon 图标，示例：(目前仅支持 `title` 左侧显示图标)

``` js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    sidebar: [
      {
        title: 'Group 1',   // 必要的
        path: '/foo/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        icon: 'fa fa-book', // 可选的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/'
        ]
      },
    ]
  }
}
```

也可以使用 `YAML front matter` 来为单独页面侧边栏添加此值：

``` yaml
---
icon: 'fa fa-book'
---
```

## Git 仓库和编辑链接

当你提供了 `themeConfig.repo` 选项，将会自动在每个页面的导航栏生成生成一个 GitHub 链接，以及在页面的底部生成一个 `“编辑此页面”` 链接。

``` js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    locales: {
      '/': {
        // 编辑链接文字
        editLinkText: '在 GitHub 上编辑此页',
      }
    },
    repo: {
      platform: 'https://github.com/',  // 填写 Git 服务商链接
      icon: 'fab fa-github',  // 填写 icon 图标 (可选)
      owner: '<USERNAME>',  //  填写 Git 项目仓库所有者
      repositories: '<REPO>',  // 填写 Git 项目仓库
      // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
      // `GitHub`/`GitLab`/`Bitbucket`/`Gitee` 其中之一，或是 `Source`。
      label: '查看源码',
    },
    
    editLinks: true,  // 默认是 false, 设置为 true 来启用
    editLinkText: '帮助我们改善此页面！',  // 默认为 "编辑此页面"

    // 假如你的文档仓库和项目本身不在一个仓库
    edit: {
      docsPlatform: 'https://github.com/',  // 填写 Git 服务商链接
      docsRepo: '<USERNAME>/<REPO>',  // 填写 Git 文档仓库
      docsBranch: '<BRANCHES>',  //  填写 Git 文档仓库分支，默认 `master`
      docsDir: '<fill>',  // 填写 Git 文档根目录
    },
  }
}
```

你可以通过 `YAML front matter` 来禁用指定页面的编辑链接：

``` yaml
---
editLink: false
---
```
## 返回顶部按钮
使用的是 [@vuepress/plugin-back-to-top](https://github.com/vuejs/vuepress/tree/master/packages/@vuepress/plugin-back-to-top) 第三方组件，已内置主题，修改图标为 `fa fa-arrow-up`
``` js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    BackToTop: true,  //  填写 `true` or `false`，默认 `true`
  }
}
```

## 页脚版权栏
页脚版权栏信息，原默认主题在首页的 `front matter` 中的 `footer` 配置项已弃用。
``` js
// .vuepress/config.js
module.exports = {
  themeConfig: {
     footer:{  // 页脚信息
      licensedLink: '', // 许可证链接 (可选)
      licensed: '', // 许可证名称
      createYear: '', // 创建年份 (可选，author、authorLink 启动时必选)
      author: '', // 作者 (可选)
      authorLink: '', // 作者链接 (可选)
      beianLink: '', // 备案链接 (可选)
      beian: '', // ICP 备号
      beianicon: '', // 备案图标 (可选)
      copyright: [  // 版权信息，显示在页脚右侧。
        {
          text: '',  // 名称
          link: ''  // 链接
        },
        {
          text: '',  // 名称
          link: ''  // 链接
        },
        {
          text: '',  // 名称
          link: ''  // 链接
        },
      ]
    }
  }
}
```

## 多语言支持
新增 icon 图标 

``` js
// .vuepress/config.js
module.exports = {
  locales: { /* ... */ },
  themeConfig: {
    locales: {
      '/': {
      /* ... */ 
      icon: 'fab fa-globe', // 自定义 icon 图标，默认 `fa fa-globe`
      /* ... */ 
      }
    }
  }
}
```
## 样式
### palette.styl
如果要对默认预设的样式进行简单的替换，或者定义一些变量供以后使用，你可以创建一个 `.vuepress/styles/palette.styl` 文件。(请复制全部文件内容后再进行修改颜色)

你可以调整的一些变量如下：
``` stylus
// 颜色
$accentColor = #2c84d0
$textColor = #2c3e50
$borderColor = #eaecef
$codeBgColor = #282c34
$arrowBgColor = #ccc
$titleColor = #2c3e50
$naviconColor = #7f7f7f
$badgeInfoColor = #007bff
$badgeTipColor = #42b983
$badgeWarningColor = #f4cd00
$badgeErrorColor = #f66
$cardBgColor = #ddd
$cardTitleColor = #000
$cardTextColor = rgba(19,31,45,0.9)
$cardImgFooterBgColor = #ddd
$cardImgFooterAuthorColor = #000
$scrollbarBgColor = #f1f1f1
$scrollbarTopColor = #00caff
$scrollbarBottomColor = #00e2ce

// 布局
$navbarHeight = 3.6rem
$sidebarWidth = 20rem
$contentWidth = 740px
$homePageWidth = 960px

// 响应式变化点
$MQNarrow = 959px
$MQMobile = 719px
$MQMobileNarrow = 419px

// ads
$MobileShow = none
$adsWidth = 100%

// 暗黑模式
$dark = {
    --accentColor: rgba(255,255,255,.8)
    --textColor: #9d9d9d
    --borderColor: #282828
    --codeBgColor: #252526
    --arrowBgColor: #9d9d9d
    --titleColor: #9d9d9d
    --naviconColor: #7f7f7f
    --badgeInfoColor: lighten(#007bff,10%)
    --badgeTipColor: lighten(#42b983,10%)
    --badgeWarningColor: lighten(#e7c000,10%)
    --badgeErrorColor: lighten(#f66,10%)
    --cardBgColor: #5a5969
    --cardTitleColor: rgba(255,255,255,.8)
    --cardTextColor: #9d9d9d
    --cardImgFooterBgColor: #5a5969
    --cardImgFooterAuthorColor: rgba(255,255,255,.8)
    --scrollbarBgColor: #f1f1f1
    --scrollbarTopColor: rgba(0,0,0,.2)
    --scrollbarBottomColor: rgba(0,0,0,.1)
}
```
### 暗黑模式第三方插件使用
示例：
```stylus
/* ... */
[data-theme = dark ] &
  /* ... */
  background-color #35363a
  color: $dark[--textColor]
  .action-button
    background-color: $dark[--accentColor]
  /* ... */

/* ... */
```

```vue
<!-- * ... * -->
<style lang="stylus">
/* ... */
[data-theme = dark ] &
  /* ... */
  .action-button
    background-color: $dark[--accentColor]
  /* ... */

/* ... */
</style>
```