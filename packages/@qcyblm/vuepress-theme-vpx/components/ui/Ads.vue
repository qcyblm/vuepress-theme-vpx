<template>
  <a  class="ads" :href="ads.link" target="_blank" :title="ads.desc" rel="noopener sponsored">
    <img :src="ads.img" :alt="ads.text" border="0">
  </a>
</template>

<script>
export default {
  name: 'Ads',
  computed: {
    ads () {
      return this.$themeConfig.ads
    }
  }
}
</script>

<style lang="stylus">
.sidebar > .ads
  padding 1.2rem
  margin-bottom -0.5rem
  border-bottom 1px solid $borderColor
  img
    width $adsWidth
    height auto
    vertical-align middle

@media (max-width: $MQMobile)
  .sidebar > .ads
    display $MobileShow
    margin-bottom 0.2rem
    img
      width $adsWidth
      height auto
[data-theme = dark ] &
  .sidebar > .ads
    border-bottom-color: $dark[--borderColor]
</style>