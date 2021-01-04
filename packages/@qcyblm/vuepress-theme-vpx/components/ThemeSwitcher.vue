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
      isLight: "",
    };
  },
  created() {
    let htmlTag = document.getElementsByTagName("html")[0];
    //动态加载当前设置的主题
    if (!window.localStorage) {
      alert("浏览器需要支持localstorage");
      return false;
    } else {
      //主逻辑业务
      var storage = window.localStorage;
      this.isLight = storage.getItem("theme");
      // console.log(storage.getItem("theme"))

      if (this.isLight === "light") {
        this.isLight = true;
        window.localStorage.setItem("theme", "light");
        htmlTag.setAttribute("data-theme", "light");
        this.$emit("themeMode", "light");
      } else {
        this.isLight = false;
        window.localStorage.setItem("theme", "dark");
        htmlTag.setAttribute("data-theme", "dark");
        this.$emit("themeMode", "dark");
      }
    }

    //获取系统主题

    /*判断是否支持主题色*/
    if (window.matchMedia("(prefers-color-scheme)").media === "not all") {
      console.log("Browser doesn't support dark mode");
    }

    /*判断是否处于深色模式*/
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      //Do some thing
      this.isLight = false;
      // console.log("prefers-color-scheme: dark");
      window.localStorage.setItem("theme", "dark");
      htmlTag.setAttribute("data-theme", "dark");
      this.$emit("themeMode", "dark");
    }

    /*判断是否处于浅色模式*/
    if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      //Do some thing
      this.isLight = true;
      // console.log("prefers-color-scheme: light");
      window.localStorage.setItem("theme", "light");
      htmlTag.setAttribute("data-theme", "light");
      this.$emit("themeMode", "light");
    }

    /*模式切换听器*/
    // var listeners = {
    //   dark: function (mediaQueryList) {
    //     if (mediaQueryList.matches) {
    //       alert("您切换到深色模式了！");
    //     }
    //   },
    //   light: function (mediaQueryList) {
    //     if (mediaQueryList.matches) {
    //       alert("您切换到浅色模式了！");
    //     }
    //   },
    // };
    // window
    //   .matchMedia("(prefers-color-scheme: dark)")
    //   .addListener(listeners.dark);
    // window
    //   .matchMedia("(prefers-color-scheme: light)")
    //   .addListener(listeners.light);
  },
  methods: {
    themeSwitch() {
      window.location;
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
.theme-switcher {
  position: relative;
  width: 40px;
  margin-left: 1.5rem;

  .switch {
    display: inline-block;
    vertical-align: middle;
    width: 100%;
    height: 10px;
    border-radius: 9px;
    cursor: pointer;

    &:focus, &:active, &:link {
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 22px;
      height: 22px;
      padding: 3px;
      border-radius: 12px;
      position: absolute;
      top: 22%;
      transition: 0.5s ease;
      box-sizing: border-box;
    }
  }

  .light {
    background-color: #dfdfdf;

    span {
      background-color: #35363a;
      transform: translateX(0%);
      color: #FFF;
    }
  }

  .dark {
    background-color: #404040;

    span {
      background-color: rgba(255, 255, 255, 0.8);
      transform: translateX(50%);
      right: 11px;
      color: #000;
    }
  }
}

@media (max-width: $MQMobile) {
  .theme-switcher {
    width: 1rem;

    .dark {
      span {
        transform: translateX(0%);
        left: 0;
      }
    }
  }
}
</style>