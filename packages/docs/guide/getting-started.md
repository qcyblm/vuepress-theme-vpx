# 快速上手
本文会帮助你从头搭建一个简单的 VuePress 文档。
1. 创建并进入一个新目录
``` sh
mkdir vuepress-starter && cd vuepress-starter
```
2. 使用你喜欢的包管理器进行初始化
``` sh
yarn init # npm init
```
3. 将 VuePress 安装为本地依赖  我们已经不再推荐全局安装 VuePress
``` sh
yarn add -D vuepress # npm install -D vuepress
```
4. 将 VPX 主题 安装为本地依赖
``` sh
yarn add @qcyblm/vuepress-theme-vpx -D
# or npm i @qcyblm/vuepress-theme-vpx -D
```
5. 创建你的第一篇文档
``` sh
mkdir docs && echo '# Hello VuePress' > docs/README.md
```
6. 创建.vuepress/config.js并引用 VPX 主题
``` sh
mkdir docs/.vuepress && touch docs/.vuepress/confing.js
```
``` js
// .vuepress/config.js

module.exports = {
  ...
  theme: '@qcyblm/vpx',
  ...
}
```
7. 在 package.json 中添加一些 scripts
这一步骤是可选的，但我们推荐你完成它。在下文中，我们会默认这些 scripts 已经被添加。
``` json
{
  "scripts": {
    "dev": "vuepress dev docs",
    "build": "vuepress build docs"
  }
}
```
8. 在本地启动服务器
``` sh
yarn dev # npm run dev
```
VuePress 会在 [http://localhost:8080](http://localhost:8080) 启动一个热重载的开发服务器。

现在，你应该已经有了一个简单可用的 VuePress 文档。接下来，了解一下推荐的 VuePress 中的 [目录结构](https://v1.vuepress.vuejs.org/zh/guide/directory-structure.html)、[基本配置](https://v1.vuepress.vuejs.org/zh/config/) 和 [VPX 扩展配置](../config/)。