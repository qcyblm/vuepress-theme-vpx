# 广告位

为了保证项目维护与发展，我们给主题添加了广告位功能，用户可以给侧边栏自定义广告，通过获取额外的资金来鼓励自己写作的积极性，这对开发者是极有帮助的。

目前，广告位支持一种风格。打开 `.vuepress/config.js` 文件，在 themeConfig 下添加 ads 字段，如下所示：

``` js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    ads:{
      // 广告位配置
    }
  }
}
```

最基本的广告风格就是 `图片 + 文字描述`，你可以通过以下的配置来使用这个功能：

``` js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    ads:{
      text: 'VPX',
      desc: '一款基于 VuePress 开发的主题。',
      img: 'https://qcyblm.me/vuepress-theme-vpx/vpx.png',
      link: '/'
    }
  }
}
```

数组成员的属性有：

- `text` 指定图像无法显示时的替代文本
- `img` 指定图片链接
- `desc` 指定文本描述
- `link` 指定点击广告时跳转的链接

此外，你可以在 `.vuepress/styles/palette.styl` 下添加样式变量 `$adsWidth` 来设置图片的宽度。  
为了给用户保留较好的浏览效果，广告位在移动端默认不显示。如果你非要在移动端显示侧边栏广告的话，可以在 `.vuepress/styles/palette.styl` 下添加 `$MobileShow = block` 即可。

文章出处：文档部分内容摘自 [AntDocs](https://antdocs.seeyoz.cn/guide/extend-config.html)
