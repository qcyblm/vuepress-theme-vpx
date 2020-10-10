---
sidebarDepth: 0
sidebar: auto
---
# 主题扩展配置
## 首页
默认的主题首页（Homepage）新增备案信息，示例：

``` md
---
/* ... */
footer:
- createYear: 创建年份（可选，author、authorLink、copyrightInfo 启动时必选）
  author: 作者 （可选）
  authorLink: 作者链接 （可选）
  copyrightInfo: 版权信息 （可选）
  licensedLink: 许可证链接 （可选）
  licensed: 许可证名称 （可选）
  beian: ICP备号 （可选）
  beianLink: 备案链接（可选）
---
```
footer启动后，`title`信息不可省略不写，你可以将`beian`、`beianlink`设置为 `null` 或者直接省略不写，来禁用备案信息。

## 导航栏
### 导航栏链接
新增 icon 图标，图标库[Font Awesome](https://fontawesome.com/)，示例：
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
## Git 仓库和编辑链接
新增 `icon` 图标 和 Git 仓库平台

``` js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    //  填写 Git 服务商，默认 `GitHub`
    repoPlatform: 'Github', // GitHub仓库可省略不写
    // 填写 Git 仓库地址（可使用完整 URL）
    repo: '<USERNAME>/<REPO>', // or '<USERNAME>'
    // 自定义icon图标（可选）
    repoicon: 'fab fa-github',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket"/"Gitee" 其中之一，或是 "Source"。
    repoLabel: '查看源码',
  }
}
```
## 多语言支持
新增 `icon` 图标 

``` js
// .vuepress/config.js
module.exports = {
  locales: { /* ... */ },
  themeConfig: {
    locales: {
      '/': {
      /* ... */ 
      icon: 'fab fa-globe',// 自定义icon图标，默认 "fa fa-globe"
      /* ... */ 
      }
    }
  }
}
```
## 样式
palette.styl
新增的一些变量如下:
``` stylus
// .vuepress/styles/palette.styl
// 颜色
$accentColor = #2c84d0
$textColor = #2c3e50
$borderColor = #eaecef
$codeBgColor = #282c34
$arrowBgColor = #ccc
$naviconColor = #7f7f7f  // 导航栏 icon 颜色
$badgeInfoColor = #007bff // 卡片信息边框颜色
$badgeTipColor = #42b983 // 卡片提示边框颜色
$badgeWarningColor = #f4cd00 // 卡片注意边框颜色
$badgeErrorColor = #f66 // 卡片警告边框颜色
$cardBgColor = #f0f4f8 // 普通、图片卡片背景色
$cardTitle = #000 // 普通、图片卡片标题色
$cardTextColor = rgba(19,31,45,0.9) // 普通、图片卡片描述色
$cardImgFooterBgColor = #fff // 图片卡片“作者”背景色
$cardImgFooterAuthor = #7f7f7f // 图片卡片“作者”名称的字体颜色
$scrollbarBgColor = #f1f1f1 // 滚动条背景色
$scrollbarTopColor = #00caff // 滚动条渐变色(Top)
$scrollbarBottomColor = #00e2ce // 滚动条渐变色(Bottom)

//暗黑模式
$dark = {
    --accentColor: #fff
    --textColor: #9d9d9d
    --borderColor: #282828
    --codeBgColor: #252526
    --arrowBgColor: #9d9d9d
    --naviconColor: #7f7f7f
    --badgeInfoColor: lighten(#007bff,10%)
    --badgeTipColor: lighten(#42b983,10%)
    --badgeWarningColor: lighten(#e7c000,10%)
    --badgeErrorColor: lighten(#f66,10%)
    --cardBgColor: #606368
    --cardTitle: #000
    --cardTextColor: #9d9d9d
    --cardImgFooterBgColor: #606368
    --cardImgFooterAuthor: #000
    --scrollbarBgColor: #f1f1f1
    --scrollbarTopColor: rgba(0,0,0,.2)
    --scrollbarBottomColor: rgba(0,0,0,.1)
}
```
### 暗黑模式第三方插件使用
index.styl示例
```stylus
/* ... */
layout_color(){
  [data-theme = dark ] & {
    /* ... */
    background-color: #35363a
    color: $dark[--textColor]
    .action-button{
      background-color: $dark[--accentColor]
    }
    /* ... */
  }
}
/* ... */
```
通用styles示例
```stylus
/* ... */
[data-theme = dark ] & {
  /* ... */
  background-color: #35363a
  color: $dark[--textColor]
  .action-button{
    background-color: $dark[--accentColor]
  }
  /* ... */
}
/* ... */
```
