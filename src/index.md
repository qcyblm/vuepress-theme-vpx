---
home: true
heroImage: /vpx.png
heroText: '@qcyblm/vuepress-theme-vpx'
tagline: '一款基于 VuePress 开发的主题'
action:
- text: 快速上手 →
  link: /vuepress-theme-vpx/guide/
  icon: fa fa-book
footerWrap:
- title: 生态系统
  item:
  - text: VPX
    link: https://qcyblm.github.io/vuepress-theme-vpx/
    desc: VuePress 主题
- title: 网站框架
  item:
  - text: VuePress
    desc: Vue 驱动的静态网站生成器
    link: https://www.vuepress.cn
- title: 社区交流
  item:
  - text: QQ 群
    link: https://qm.qq.com/cgi-bin/qm/qr?k=LXzCQVHzXBmJn99XpR3KWamSBnACbAkt&jump_from=webapi
---
### 安装主题

<code-group>
<code-block title="yarn" active>
```bash
yarn add @qcyblm/vuepress-theme-vpx -D
```
</code-block>

<code-block title="npm">
```bash
npm i @qcyblm/vuepress-theme-vpx -D
```
</code-block>

<code-block title="cnpm">
```bash
cnpm i @qcyblm/vuepress-theme-vpx -D
```
</code-block>
</code-group>

### 引用主题
``` js
// .vuepress/config.js

module.exports = {
  ...
  theme: '@qcyblm/vpx',
  ...
}
```

### 更新日志
#### v1.0.6(2021.01.04)
- 修复暗黑模式强制刷新变浅色模式
- 新增 `copyright` html 渲染解析标签支持
#### V1.0.4 (2020.11.08)
- 修复已知Bug
- 普通卡片列表右侧添加 icon 图标
#### V1.0.3 (2020.11.08)
- 修复 ul li 链接样式
#### V1.0.2 (2020.11.07)
- 修复 Git 仓库和编辑链接
#### V1.0.1 (2020.11.04)
1. 引入 [Font Awesome](http://www.fontawesome.com.cn/faicons/) 图标库
2. `action` 可扩增性，添加 icon 图标
3. `action`、 `nav`、`sidebar`、`repo`、 `locales` 添加 `icon` 图标
4. 扩展 `features` img、link、描述 支持 html 渲染解析标签支持
5. 扩展 `footer` 页脚栏、社交图片、版权等信息
6. Git 仓库和编辑链接扩展
7. 新增 返回顶部按钮
8. 新增 暗黑模式
9. 新增 滚动条美化
10. 新增 侧边栏广告栏
11. 新增 Markdown 自定义容器
    - info 信息容器
    - theorem 定理容器
    - 居中容器
    - 普通卡片列表
    - 图片卡片列表
12. 其他样式轻微优化