<template>
  <div class="theme-switcher">
    <a
      class="switch"
      :class="{ light: isLight, dark: !isLight }"
      @click="themeSwitch"
    >
      <span>
        <i v-if="isLight" class="fa fa-sun" aria-hidden="true"></i>
        <i v-else class="fa fa-moon" aria-hidden="true"></i>
      </span>
    </a>
  </div>
</template>

<script>
export default {
  name: "ThemeSwitcher",
  data() {
    return {
      isLight: 'light',
    };
  },
  beforeMount() {
    let htmlTag = document.getElementsByTagName("html")[0];
    if (!window.localStorage) {
      console.log("The browser needs to support localstorage.");
      return false;
    } else {
      var storage = window.localStorage;
       if (!storage.getItem("myth")) {
         window.localStorage.setItem("theme", "light");
        htmlTag.setAttribute("data-theme", "light");
        return
      }
      this.isLight = storage.getItem("theme");
      if (this.isLight === 'light') {
        this.isLight = true;
        window.localStorage.setItem("theme", "light");
        htmlTag.setAttribute("data-theme", "light");
        this.$emit("themeMode", "light");
      } else {
        this.isLight= false
        window.localStorage.setItem("theme", "dark");
        htmlTag.setAttribute("data-theme", "dark");
        this.$emit("themeMode", "dark");
      }
    }
  },
  methods: {
    themeSwitch() {
      window.location;
      window.localStorage.setItem("myth", "1");
      this.isLight = !this.isLight;
      let htmlTag = document.getElementsByTagName("html")[0];
      if (this.isLight) {
        window.localStorage.setItem("theme", "light");
        htmlTag.setAttribute("data-theme", "light");
        this.$emit("themeMode", "light");
      } else {
        window.localStorage.setItem("theme", "dark");
        htmlTag.setAttribute("data-theme", "dark");
        this.$emit("themeMode", "dark");
      }
    },
  },
};
</script>

<style lang="stylus">
.theme-switcher
  position relative
  width 40px
  margin-left 1.5rem
  .switch
    display inline-block
    vertical-align middle
    width 100%
    height 10px
    border-radius 9px
    cursor pointer
    &:focus, &:active, &:link
      -webkit-tap-highlight-color rgba(0, 0, 0, 0)
    span
      display flex
      align-items center
      justify-content center
      width 22px
      height 22px
      padding 3px
      border-radius 12px
      position absolute
      top 22%
      transition: 0.5s ease
      box-sizing border-box
  .light
    background-color #dfdfdf
    span
      background-color #35363a
      transform translateX(0%)
      color #FFF
  .dark
    background-color #404040
    span
      background-color rgba(255, 255, 255, 0.8)
      transform translateX(50%)
      right 11px
      color #000
@media (max-width: $MQMobile)
  .theme-switcher
    width 1rem
    .dark
      span
        transform: translateX(0%)
        left: 0
</style>
