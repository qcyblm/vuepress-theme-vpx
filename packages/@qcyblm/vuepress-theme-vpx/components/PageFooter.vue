<template>
  <div class="page-footer">
    <ul class="inner">
      <li>Theme by <a href="https://gitee.com/qcyblm/vuepress-theme-vpx" title="本站主题" target="_blank" rel="noopener noreferrer">VPX</a> </li>
      <li>Powered by <a href="https://www.vuepress.cn/" target="_blank" rel="noopener noreferrer">VuePress</a> </li>
      <li v-if="footer.licensedLink">
        <a :href="footer.licensedLink" target="_blank" rel="noopener noreferrer">{{ footer.licensed }}</a> Licensed
      </li>
      <li v-if="footer.createYear < new Date().getFullYear()">
        &copy; {{ footer.createYear }}-{{ new Date().getFullYear() }}
        <a v-if="footer.authorLink" :href="footer.authorLink" target="_blank" rel="noopener noreferrer"> {{ footer.author }} </a>
        <template v-else> {{ footer.author }} </template>
      </li>
      <li v-else-if="footer.createYear">
        Copyright &copy; {{ footer.createYear }}
        <a v-if="footer.authorLink" :href="footer.authorLink" target="_blank" rel="noopener noreferrer"> {{ footer.author }} </a>
        <template v-else> {{ footer.author }} </template>
      </li>
      <li v-if="footer.beianLink">
        <a :href="footer.beianLink" target="_blank" rel="noopener noreferrer">
          <img v-if="footer.beianicon" :src="footer.beianicon" >  {{footer.beian}}
        </a>
      </li>
      <li v-for="item in copyright" :key="item.link">
        <a v-if="item.link" :href="item.link" target="_blank" rel="noopener noreferrer">{{ item.text }}</a>
        <template v-else><span v-html="item.text">{{ item.text }}</span></template>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  computed: {
    footer() {
      return this.$themeConfig.footer;
    },
    copyright() {
      return this.$themeConfig.footer.copyright
    }
  },
};
</script>
<style lang="stylus">
@require '../styles/wrapper.styl'
.page-footer
  @extend $wrapper
  padding 0 2.5rem
  .inner
    border-top 1px solid $borderColor
    padding-top 2rem
    text-align center
    margin 0
    li
      display inline-block
      padding 0 10px
      border-right 1px solid #ccc
      color $textColor
      font-size 12px
      &:first-child
        padding-left 0
      &:last-child
        border-right none
        padding-right 0
      img 
        vertical-align middle
        margin-right 8px
@media (max-width: $MQMobileNarrow)
  .page-footer
    padding 0 1.5rem
    .inner
      li
        display block
        border none
        padding 0
        line-height 1rem
[data-theme = dark ] &
  .page-footer
    .inner
      border-top: 1px solid $dark[--borderColor]
      color: lighten($dark[--textColor], 25%)
      li
        border-right: 1px solid $dark[--textColor]
        color: $dark[--textColor]
        &:last-child
          border-right none
        @media (max-width: $MQMobile)
          border-right none
</style>
