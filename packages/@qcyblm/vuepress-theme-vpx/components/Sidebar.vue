<template>
  <aside class="sidebar">
    <Ads v-if="$themeConfig.ads" />
    <NavLinks />

    <slot name="top" />

    <SidebarLinks
      :depth="0"
      :items="items"
    />
    <slot name="bottom" />
  </aside>
</template>

<script>
import Ads from '@theme/components/ui/Ads.vue'
import SidebarLinks from '@theme/components/SidebarLinks.vue'
import NavLinks from '@theme/components/NavLinks.vue'

export default {
  name: 'Sidebar',

  components: { Ads, SidebarLinks, NavLinks },

  props: ['items']
}
</script>

<style lang="stylus">
.sidebar
  background-color #fff
  border-right 1px solid $borderColor
  ul
    padding 0
    margin 0
    list-style-type none
  a
    display inline-block
  .nav-links
    display none
    border-bottom 1px solid $borderColor
    padding 0.5rem 0 0.75rem 0
    a
      font-weight 600
    .nav-item
      display block
      line-height 1.25rem
      font-size 1.1em
      padding 0.5rem 0 0.5rem 1.5rem
  & > .sidebar-links
    padding 1.5rem 0
    & > li > a.sidebar-link
      font-size 1.1em
      line-height 1.7
      font-weight bold
    & > li:not(:first-child)
      margin-top .75rem

@media (max-width: $MQMobile)
  .sidebar
    .nav-links
      display block
      .dropdown-wrapper .nav-dropdown .dropdown-item a.router-link-active::after
        top calc(1rem - 2px)
    & > .sidebar-links
      padding 1rem 0

[data-theme = dark ] &
  .sidebar
    background-color: #35363a
    border-right: 1px solid $dark[--borderColor]
    .nav-links
      border-bottom: 1px solid $dark[--borderColor]
</style>
