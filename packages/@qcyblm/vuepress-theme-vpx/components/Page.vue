<template>
  <main class="page">
    <slot name="top" />

    <Content class="theme-vpx-content" />
    <PageEdit v-if="$themeConfig.lastUpdated || $themeConfig.editLinks" />

    <PageNav v-bind="{ sidebarItems }" />
    <PageFooter v-if="$themeConfig.footer" />
    <slot name="bottom" />
  </main>
</template>

<script>
import PageEdit from "@theme/components/PageEdit.vue";
import PageNav from "@theme/components/PageNav.vue";
import PageFooter from "@theme/components/PageFooter.vue";

export default {
  components: { PageEdit, PageNav, PageFooter },
  props: ["sidebarItems"],
};
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'
.page
  padding-bottom 2rem
  display block
</style>
