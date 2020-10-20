<template>
  <main
    class="home"
    :aria-labelledby="data.heroText !== null ? 'main-title' : null"
  >
    <header class="hero">
      <img
        v-if="data.heroImage"
        :src="$withBase(data.heroImage)"
        :alt="data.heroAlt || 'hero'"
      />

      <h1 v-if="data.heroText !== null" id="main-title">
        {{ data.heroText || $title || "Hello" }}
      </h1>

      <h2 v-if="data.tagline !== null" v-html="tagline" class="tagline"></h2>

      <p v-if="data.actionText && data.actionLink" class="action">
        <NavLink class="action-button" :item="actionLink" />
      </p>
    </header>

    <div v-if="data.features && data.features.length" class="features">
      <div
        v-for="(feature, index) in data.features"
        :key="index"
        class="feature"
      >
        <a v-if="feature.link" :href="feature.link">
          <img
            v-if="feature.imgUrl"
            :src="$withBase(feature.imgUrl)"
            :alt="feature.title"
          />
          <h2>{{ feature.title }}</h2>
          <p>{{ feature.details }}</p>
        </a>
        <span v-else>
          <img
            v-if="feature.imgUrl"
            :src="$withBase(feature.imgUrl)"
            :alt="feature.title"
          />
          <h2>{{ feature.title }}</h2>
          <p>{{ feature.details }}</p>
        </span>
      </div>
    </div>

    <Content class="theme-vpx-content custom" />
    <footer v-if="$themeConfig.footer">
      <p style="margin-bottom: 0" v-if="$themeConfig.socialIcons">
        <SocialIcon
          v-for="icon in $themeConfig.socialIcons"
          :type="icon.type"
          :link="icon.link"
          :key="icon.link"
          extra-class="inverted"
        />
      </p>
      <p style="margin-top: 0">
        <span>
          Theme&nbsp;by&nbsp;<a
            href="https://github.com/qcyblm/vuepress-theme-vpx"
            title="本站主题"
            target="_blank"
            rel="noopener noreferrer"
            >VPX</a
          ></span
        >
        <span v-if="footer.licensed">
          <a
            v-if="footer.licensedLink"
            :href="footer.licensedLink"
            target="_blank"
            rel="noopener noreferrer"
            >{{ footer.licensed }}</a
          >
          <span v-else>{{ footer.licensed }}</span>
          <span>Licensed</span>
        </span>
        <span v-if="footer.createYear">
          &copy;
          <span v-if="footer.createYear < new Date().getFullYear()">
            {{ footer.createYear }}-{{ new Date().getFullYear() }}
          </span>
          <span v-else>{{ footer.createYear }}&nbsp;</span>
          <span v-if="footer.authorLink">
            <a :href="footer.authorLink" target="_blank" rel="noopener noreferrer">
              {{ footer.author }}
            </a>
            &nbsp;
          </span>
          <span v-else-if="footer.author"> {{ footer.author }}&nbsp; </span>
          <span v-if="footer.copyrightInfo" v-html="footer.copyrightInfo">
            {{ footer.copyrightInfo }}
          </span>
        </span>
        <span v-if="footer.beian">
          <a v-if="footer.beianLink" :href="footer.beianLink" target="_blank" rel="noopener noreferrer">{{
            footer.beian
          }}</a>
          <span v-else>{{ footer.beian }}</span>
        </span>
      </p>
    </footer>
  </main>
</template>

<script>
import NavLink from "@theme/components/NavLink.vue";
import SocialIcon from "@theme/components/ui/SocialIcon.vue";

export default {
  name: "Home",

  components: { NavLink, SocialIcon },

  computed: {
    data() {
      return this.$page.frontmatter;
    },
    tagline() {
      return (
        this.data.tagline || this.$description || "欢迎来到您的 VuePress 网站"
      );
    },
    actionLink() {
      return {
        link: this.data.actionLink,
        text: this.data.actionText,
        icon: this.data.actionIcon
      };
    },
    footer() {
      return this.$themeConfig.footer;
    },
  },
};
</script>

<style lang="stylus">
.home {
  padding: $navbarHeight 2rem 0;
  max-width: $homePageWidth;
  margin: 0px auto;
  display: block;

  .hero {
    text-align: center;

    img {
      max-width: 100%;
      max-height: 280px;
      display: block;
      margin: 3rem auto 1.5rem;
    }

    h1 {
      font-size: 3rem;
    }

    h1, .tagline, .action {
      margin: 1.8rem auto;
    }

    .tagline {
      max-width: 35rem;
      font-size: 1.6rem;
      line-height: 1.3;
      color: lighten($textColor, 40%);
      border-bottom: 0;
      font-weight: 300;
    }

    .action-button {
      display: inline-block;
      font-size: 1.2rem;
      color: #fff;
      background-color: $accentColor;
      padding: 0.8rem 1.6rem;
      border-radius: 99px;
      transition: background-color 0.1s ease;
      box-sizing: border-box;
      border-bottom: 1px solid darken($accentColor, 10%);

      &:hover {
        background-color: lighten($accentColor, 10%);
        box-shadow: 0 10px 20px -10px #999;
        transform: translateY(-5px);
        text-decoration: none;

        span {
          text-shadow: 3px 2px 5px rgba(0, 0, 0, 0.15);
        }
      }
    }
  }

  .features {
    border-top: 1px solid $borderColor;
    border-bottom: 1px solid $borderColor;
    padding: 1.2rem 0;
    margin-top: 2.5rem;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: stretch;
    justify-content: space-between;
  }

  .feature {
    flex-grow: 1;
    flex-basis: 30%;
    max-width: 30%;
    text-align: center;

    a:hover {
      text-decoration: none;

      h2 {
        color: $accentColor;
      }
    }

    img {
      width: 128px;
      height: auto;
    }

    h2 {
      font-size: 1.4rem;
      font-weight: 500;
      border-bottom: none;
      padding-bottom: 0;
      color: lighten($textColor, 10%);
    }

    p {
      color: lighten($textColor, 25%);
      text-align: left;
      text-indent: 2em;
    }
  }

  footer {
    padding: 1rem;
    border-top: 1px solid $borderColor;
    text-align: center;
    color: lighten($textColor, 25%);

    a {
      color: lighten($textColor, 25%);

      &:hover {
        color: $accentColor;
        text-decoration: none;
      }
    }

    .social-icon {
      margin: 0 5px;
      font-size: 1.2rem;
    }

    p > span {
      display: block;
    }
  }
}

@media (max-width: $MQMobile) {
  .home {
    .features {
      flex-direction: column;
    }

    .feature {
      max-width: 100%;
      padding: 0 2.5rem;
    }

    .footer {
      padding: 0.8rem;
    }
  }
}

@media (max-width: $MQMobileNarrow) {
  .home {
    padding-left: 1.5rem;
    padding-right: 1.5rem;

    .hero {
      img {
        max-height: 210px;
        margin: 2rem auto 1.2rem;
      }

      h1 {
        font-size: 2rem;
      }

      h1, .tagline, .action {
        margin: 1.2rem auto;
      }

      .tagline {
        font-size: 1.2rem;
      }

      .action-button {
        font-size: 1rem;
        padding: 0.6rem 1.2rem;
      }
    }

    .feature {
      h2 {
        font-size: 1.25rem;
      }
    }

    footer {
      font-size: 0.75rem;
      padding: 0.8rem;

      span {
        overflow-wrap: break-word;
      }
    }
  }
}

[data-theme = dark ] & {
  .home {
    .hero {
      .tagline {
        color: lighten($dark[--textColor], 40%);
      }

      .action-button {
        color: #35363a;
        background-color: $dark[--accentColor];
        border-bottom: 1px solid darken($dark[--accentColor], 10%);

        &:hover {
          background-color: lighten($dark[--accentColor], 20%);
        }
      }
    }

    .features {
      border-top: 1px solid $dark[--borderColor];
      border-bottom: 1px solid $dark[--borderColor];
    }

    .feature {
      a:hover {
        h2 {
          color: $dark[--accentColor];
        }
      }

      h2 {
        color: lighten($dark[--textColor], 10%);
      }

      p {
        color: lighten($dark[--textColor], 25%);
      }
    }

    footer {
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
}
</style>
