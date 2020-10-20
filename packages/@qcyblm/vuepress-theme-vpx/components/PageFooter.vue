<template>
  <footer class="page-footer">
    <p class="inner" v-if="footer">
      <span v-if="footer.createYear"
        >&copy;
        <span v-if="footer.createYear < new Date().getFullYear()">
          {{ footer.createYear }}-{{ new Date().getFullYear() }}
        </span>
        <span v-else>{{ footer.createYear }}</span>
        <span v-if="footer.authorLink"
          ><a :href="footer.authorLink" target="_blank" rel="noopener noreferrer">{{ footer.author }}</a
          >&nbsp;</span
        >
        <span v-else-if="footer.author">{{ footer.author }}&nbsp;</span>
        <span v-html="footer.copyrightInfo">{{ footer.copyrightInfo }}</span>
      </span>
    </p>
  </footer>
</template>
<script>
export default {
  computed: {
    footer() {
      return this.$themeConfig.footer;
    },
  },
};
</script>
<style lang="stylus">
@require '../styles/wrapper.styl';

.page-footer {
  @extend $wrapper;
  padding-top: 0;
  padding-bottom: 0;

  .inner {
    min-height: 2rem;
    margin-top: 0;
    margin-bottom: 0;
    border-top: 1px solid $borderColor;
    padding-top: 2rem;
    overflow: auto;
    text-align: center;
    color: lighten($textColor, 25%);

    a {
      color: lighten($textColor, 25%);

      &:hover {
        color: $accentColor;
        text-decoration: none;
      }
    }
  }
}

[data-theme = dark ] & {
  .inner {
    border-top: 1px solid $dark[--borderColor];
    color: lighten($dark[--textColor], 25%);

    a {
      color: lighten($dark[--textColor], 25%);

      &:hover {
        color: $dark[--accentColor];
      }
    }
  }
}
</style>
