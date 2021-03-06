<template>
  <ul
    v-if="userLinks.length || repoLink"
    class="nav-links"
  >
    <!-- user links -->
    <li
      v-for="item in userLinks"
      :key="item.link"
      class="nav-item"
    >
      <DropdownLink
        v-if="item.type === 'links'"
        :item="item"
      />
      <NavLink
        v-else
        :item="item"
      />
    </li>

    <!-- repo link -->
    <li v-if="repoLink" class="nav-item">
      <a
        :href="repoLink"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i v-if="repo.icon" :class="repo.icon" />
        <span>{{repoLabel}}</span>
        <OutboundLink />
      </a>
    </li>
  </ul>
</template>

<script>
import DropdownLink from '@theme/components/DropdownLink.vue'
import { resolveNavLinkItem } from '../util'
import NavLink from '@theme/components/NavLink.vue'

export default {
  name: 'NavLinks',

  components: {
    NavLink,
    DropdownLink
  },

  computed: {
    userNav () {
      return this.$themeLocaleConfig.nav || this.$site.themeConfig.nav || []
    },

    nav () {
      const { locales } = this.$site
      if (locales && Object.keys(locales).length > 1) {
        const currentLink = this.$page.path
        const routes = this.$router.options.routes
        const themeLocales = this.$site.themeConfig.locales || {}
        const languageDropdown = {
          icon: this.$themeLocaleConfig.icon || 'fa fa-globe',
          text: this.$themeLocaleConfig.selectText || 'Languages',
          ariaLabel: this.$themeLocaleConfig.ariaLabel || 'Select language',
          items: Object.keys(locales).map(path => {
            const locale = locales[path]
            const text = themeLocales[path] && themeLocales[path].label || locale.lang
            let link
            // Stay on the current page
            if (locale.lang === this.$lang) {
              link = currentLink
            } else {
              // Try to stay on the same page
              link = currentLink.replace(this.$localeConfig.path, path)
              // fallback to homepage
              if (!routes.some(route => route.path === link)) {
                link = path
              }
            }
            return { text, link }
          })
        }
        return [...this.userNav, languageDropdown]
      }
      return this.userNav
    },

    userLinks () {
      return (this.nav || []).map(link => {
        return Object.assign(resolveNavLinkItem(link), {
          items: (link.items || []).map(resolveNavLinkItem)
        })
      })
    },

    repo() {
      return this.$site.themeConfig.repo
    },
    repoLink () {
      const { repo } = this.$site.themeConfig
      if (repo) {
        return /^http[s]?:/.test(repo.owner)
          ? repo
          : `${ repo.platform }${ repo.owner }/${ repo.repositories || "" }`
      }
      return null
    },
    repoLabel () {
      if (!this.repoLink) return
      if (this.repo.label) {
        return this.repo.label
      }

      const repoHost = this.repoLink.match(/^http[s]?:\/\/[^/]+/)[0]
      const platforms = ['GitHub', 'GitLab', 'Bitbucket','Gitee']
      for (let i = 0; i < platforms.length; i++) {
        const platform = platforms[i]
        if (new RegExp(platform, 'i').test(repoHost)) {
          return platform
        }
      }

      return 'Source'
    }
  }
}
</script>

<style lang="stylus">
.nav-links
  display inline-block
  padding 0
  margin 0
  list-style none
  a
    line-height 1.4rem
    color inherit
    &:hover
      color $accentColor
    &.router-link-active
      color $accentColor
      .fa,.fab,span
        color $accentColor
  .nav-item
    position relative
    display inline-block
    margin-left 1.5rem
    line-height 2rem
    padding 0
    a 
      &:hover
        color $accentColor
    &:first-child
      margin-left 0
    .fab,.fa
      color $naviconColor

@media (max-width: $MQMobile)
  .nav-links
    .nav-item
      margin-left 0

@media (min-width: $MQMobile)
  .nav-links a
    &:hover, &.router-link-active
      color $textColor
  .nav-item > a:not(.external)
    &.router-link-active
      border-bottom 2px solid lighten($accentColor, 8%)
    &:hover, &.router-link-active
      margin-bottom -2px

[data-theme = dark ] &
  .nav-links
    a
      color inherit
      &:hover
        color: $dark[--accentColor]
        span
          color: $dark[--accentColor]
      &.router-link-active
        color: $dark[--accentColor]
        .fa,.fab,span
          color: $dark[--accentColor]
    .nav-item
      a
        &:hover
          color: $dark[--accentColor]
      .fab,.fa
        color: $dark[--naviconColor]
  @media (min-width: $MQMobile)
    .nav-links
      a
        &:hover, &.router-link-active
          color: $dark[--textColor]
    .nav-item > a:not(.external)
      &.router-link-active
        border-bottom: 2px solid lighten($dark[--accentColor], 8%)

</style>
