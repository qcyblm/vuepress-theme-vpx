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
- title: MIT Licensed | Copyright © 2020 qcyblm
  beian: ICP备号
  beianlink: http://www.xxx.com/
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
$naviconColor = #7f7f7f // 导航栏 icon 颜色
$scrollbarBgColor = #f1f1f1  // 滚动条背景色
$scrollbarTopColor = #00caff // 滚动条渐变色(Top)
$scrollbarBottomColor = #00e2ce // 滚动条渐变色(Bottom)
$cardBgColor = #fff // 普通、图片卡片背景色
$cardTitle = #000 // 普通、图片卡片标题色
$cardTextColor = rgba(19,31,45,0.9) // 普通、图片卡片描述色
$cardImgFooterBgColor = #fff // 图片卡片“作者”背景色
$cardImgFooterAuthor = #7f7f7f // 图片卡片“作者”名称的字体颜色
```