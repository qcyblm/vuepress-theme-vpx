# Markdown 容器 <Badge text="By Evan Xu"/>

Markdown 容器是对 Markdown 语法的一个扩展，使用简单的语法就可以在页面中呈现丰富的效果。

除了原默认主题自带的容器外，本主题还新增了一些好用的自定义容器。

## 提示框容器
**输入**
```` md
::: info
这是一条信息
:::

::: tip
这是一条提示
:::

::: warning
这是一条注意
:::

::: danger
这是一条警告
:::
````

**输出**
::: info
这是一条信息
:::

::: tip
这是一条提示
:::

::: warning
这是一条注意
:::

::: danger
这是一条警告
:::

## 布局容器
**输入**
```` md
::: center
  ### 我是居中的内容
  （可用于标题、图片等的居中）
:::

::: right
  [我是右浮动的内容](https://zh.wikipedia.org/wiki/%E7%89%9B%E9%A1%BF%E8%BF%90%E5%8A%A8%E5%AE%9A%E5%BE%8B)
:::

::: details
这是一个详情块，在 IE / Edge 中不生效
```js
console.log('这是一个详情块')
```
:::

::: theorem 牛顿第一定律
假若施加于某物体的外力为零，则该物体的运动速度不变。
::: right
来自 [维基百科](https://zh.wikipedia.org/wiki/%E7%89%9B%E9%A1%BF%E8%BF%90%E5%8A%A8%E5%AE%9A%E5%BE%8B)
:::
````

**输出**
::: center
  ### 我是居中的内容
  （可用于标题、图片等的居中）
:::

::: right
  [我是右浮动的内容](https://zh.wikipedia.org/wiki/%E7%89%9B%E9%A1%BF%E8%BF%90%E5%8A%A8%E5%AE%9A%E5%BE%8B)
:::

::: details
这是一个详情块，在 IE / Edge 中不生效
```js
console.log('这是一个详情块')
```
:::

::: theorem 牛顿第一定律
假若施加于某物体的外力为零，则该物体的运动速度不变。

::: right
来自 [维基百科](https://zh.wikipedia.org/wiki/%E7%89%9B%E9%A1%BF%E8%BF%90%E5%8A%A8%E5%AE%9A%E5%BE%8B)
:::


## 普通卡片列表

普通卡片列表容器，可用于`友情链接`、`项目推荐`、`诗词展示`等。

先来看看效果：

**输出**
::: cardLink
```yaml
- name: 青春永不落幕
  link: https://qcyblm.github.io
  nameColor: ''
  bgColor: ''
```
:::

::: cardLinks
```yaml
- name: 青春永不落幕
  desc: 一位静态网站设计爱好者
  avatar: https://s.gravatar.com/avatar/391164c0f6fa34cedeb20590ae49dd9f?s=80
  link: https://blog.azan.one/
  nameColor: ''
  bgColor: ''
  textColor: ''
```
:::

::: cardList
```yaml
- name: 青春永不落幕
  desc: 一位静态网站设计爱好者
  avatar: https://s.gravatar.com/avatar/391164c0f6fa34cedeb20590ae49dd9f?s=80
  link: https://blog.azan.one/
  nameColor: ''
  bgColor: ''
  textColor: ''
```
:::

上面效果在Markdown中的代码是这样的：

**输入**
```` md

::: cardLink
```yaml
- name: 青春永不落幕
  link: https://qcyblm.github.io
  nameColor: ''
  bgColor: ''
```
:::

::: cardLinks
```yaml
- name: 青春永不落幕
  desc: 一位静态网站设计爱好者
  avatar: https://s.gravatar.com/avatar/391164c0f6fa34cedeb20590ae49dd9f?s=80
  link: https://blog.azan.one/
  nameColor: ''
  bgColor: ''
  textColor: ''
```
:::

::: cardList
```yaml
- name: 青春永不落幕
  desc: 一位静态网站设计爱好者
  avatar: https://s.gravatar.com/avatar/391164c0f6fa34cedeb20590ae49dd9f?s=80
  link: https://blog.azan.one/
  nameColor: ''
  bgColor: ''
  textColor: ''
```
:::
````

### 语法
````md
::: cardLink
```yaml
- name: 名称
  link: https://xxx/ #链接（可选）
  nameColor: '' # 名称颜色（可选），默认$cardTitle。颜色值有#号时请添加单引号
  bgColor: '' # 背景色（可选），默认$cardBgColor。颜色值有#号时请添加单引号
```
:::

::: cardLinks <每行显示数量> or cardList <每行显示数量>
``` yaml
- name: 名称
  desc: 描述
  avatar: https://xxx.jpg # 头像（可选）
  link: https://xxx/ # 链接（可选）
  nameColor: '' # 名称颜色（可选），默认$cardTitle。颜色值有#号时请添加单引号
  bgColor: '' # 背景色（可选），默认$cardBgColor。颜色值有#号时请添加单引号
  textColor: '' # 文本色（可选），默认$cardTextColor 颜色值有#号时请添加单引号
```
:::
````

- `<每行显示数量>` 数字，表示每行最多显示多少个，选值范围1~4，默认3。在小屏时会根据屏幕宽度减少每行显示数量。
- 代码块需指定语言为`yaml`
- 代码块内是一个`yaml`格式的数组列表
- 数组成员的属性有：
  * `name`名称
  * `desc`描述
  * `avatar`头像（可选）
  * `link`链接（可选）
  * `nameColor`名称颜色（可选），默认$cardTitle。颜色值有`#`号时请添加单引号
  * `bgColor`背景色（可选），默认$cardBgColor。颜色值有`#`号时请添加单引号
  * `textColor`文本色（可选），默认$cardTextColor 颜色值有`#`号时请添加单引号

下面再来看另外一个示例：

**输入**
```` md
::: cardList 2
```yaml
- name: 《静夜思》
  desc: 床前明月光，疑是地上霜。举头望明月，低头思故乡。
  bgColor: '#F0DFB1'
  textColor: '#242A38'
- name: VPX
  desc: 一款基于 VuePress 的开发主题
  link: https://github.com/qcyblm/vuepress-theme-vpx
  bgColor: '#DFEEE7'
  textColor: '#2A3344'
```
:::
````

**输出**
::: cardList 2
```yaml
- name: 《静夜思》
  desc: 床前明月光，疑是地上霜。举头望明月，低头思故乡。
  bgColor: '#F0DFB1'
  textColor: '#242A38'
- name: VPX
  desc: 一款基于 VuePress 的开发主题
  link: https://github.com/qcyblm/vuepress-theme-vpx
  bgColor: '#DFEEE7'
  textColor: '#2A3344'
```
:::

## 图文卡片列表

图文卡片列表容器，可用于`项目展示`、`产品展示`等。

先看效果：

**输出**
::: cardImgList
```yaml
- img: '/vuepress-theme-vpx/assets/img/output.jpg'
  link: '#'
  name: 标题
  desc: 描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容 # 描述（可选）
  author: qcyblm # 作者（可选）
  authorLink: 'https://github.com/qcyblm'
  avatar: https://s.gravatar.com/avatar/391164c0f6fa34cedeb20590ae49dd9f?s=80 # 头像（可选）
  nameColor: '#768BFE'
  bgColor: '#E5E5E5'
  textColor: 'red'
  authorbgColor: '#ccc'
  authorColor: '#0058cf'
- img: '/vuepress-theme-vpx/assets/img/output.jpg'
  link: '#'
  name: 标题
  desc: 描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容
  author: qcyblm
  avatar: https://s.gravatar.com/avatar/391164c0f6fa34cedeb20590ae49dd9f?s=80
- img: '/vuepress-theme-vpx/assets/img/output.jpg'
  link: '#'
  name: 标题
  desc: 描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容
  author: qcyblm
  avatar: https://s.gravatar.com/avatar/391164c0f6fa34cedeb20590ae49dd9f?s=80
```
:::

**输入**
````md
::: cardImgList
```yaml
- img: '/vuepress-theme-vpx/assets/img/output.jpg'
  link: '#'
  name: 标题
  desc: 描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容 # 描述（可选）
  author: qcyblm # 作者（可选）
  authorLink: 'https://github.com/qcyblm'
  avatar: https://s.gravatar.com/avatar/391164c0f6fa34cedeb20590ae49dd9f?s=80 # 头像（可选）
  nameColor: '#768BFE'
  bgColor: '#E5E5E5'
  textColor: 'red'
  authorbgColor: '#ccc'
  authorColor: '#0058cf'
- img: '/vuepress-theme-vpx/assets/img/output.jpg'
  link: '#'
  name: 标题
  desc: 描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容
  author: qcyblm
  avatar: https://s.gravatar.com/avatar/391164c0f6fa34cedeb20590ae49dd9f?s=80
- img: '/vuepress-theme-vpx/assets/img/output.jpg'
  link: '#'
  name: 标题
  desc: 描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容
  author: qcyblm
  avatar: https://s.gravatar.com/avatar/391164c0f6fa34cedeb20590ae49dd9f?s=80
```
:::
````


### 语法
````md
::: cardImgList <每行显示数量>
``` yaml
- img: https://xxx.jpg # 图片地址
  link: https://xxx.com # 链接地址
  name: 标题 # 可选
  desc: 描述 # 可选
  author: 作者名称 # 可选
  authorLink: https://xxx.com #作者链接地址（可选），默认链接地址。
  avatar: https://xxx.jpg # 作者头像（可选）
  bgColor: '' #标题描述背景色（可选），默认$cardBgColor。颜色值有#号时请添加单引号
  nameColor: '' #标题色（可选），默认$cardTitle。颜色值有#号时请添加单引号
  textColor: '' #描述色（可选），默认$cardTextColor。颜色值有#号时请添加单引号
  authorbgColor: '' #“作者”背景色（可选），默认$cardImgFooterBgColor。颜色值有#号时请添加单引号
  authorColor: '' #“作者”名称的字体颜色（可选），默认$cardImgFooterAuthor。颜色值有#号时请添加单引号
```
:::
````
- `<每行显示数量>` 数字，表示每行最多显示多少个，选值范围1~4，默认3。在小屏时会根据屏幕宽度减少每行显示数量。
- 代码块需指定语言为`yaml`
- 代码块内是一个`yaml`格式的数组列表
- 数组成员的属性有：
  - `img`图片地址
  - `link`链接地址
  - `name`标题（可选）
  - `desc`描述（可选）
  - `author`作者名称（可选）
  - `authorLink`作者链接地址（可选），默认链接地址。
  - `avatar`作者头像（可选）
  - `bgColor`标题描述背景色（可选），默认$cardBgColor。颜色值有#号时请添加单引号
  - `nameColor`标题色（可选），默认$cardTitle。颜色值有#号时请添加单引号
  - `textColor`描述色（可选），默认$cardTextColor。颜色值有#号时请添加单引号
  - `authorbgColor`“作者”背景色（可选），默认$cardImgFooterBgColor。颜色值有#号时请添加单引号
  - `authorColor`“作者”名称的字体颜色（可选），默认$cardImgFooterAuthor。颜色值有#号时请添加单引号