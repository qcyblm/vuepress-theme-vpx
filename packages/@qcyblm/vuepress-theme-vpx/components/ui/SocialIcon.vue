<template>
  <li>
    <a :href="link" :title="type" :class="extraClass" target="_blank" rel="noopener noreferrer">
      <i :class="iconClass" class="fa-lg" />
      <span class="sr-only">{{ type }}</span>
    </a>
  </li>
</template>

<script>
const SOCIAL_ICON_CLASS_MAP = {
  Email: "fa fa-envelope",
  GitHub: "fab fa-github",
  GitLab: "fab fa-gitlab",
  WeChat: "fab fa-weixin",
  QQ: "fab fa-qq",
  Weibo: "fab fa-weibo",
  Music: "fa fa-music",
  Twitter: "fab fa-twitter",
  Telegram: "fab fa-telegram",
  LinkedIn: "fab fa-linkedin",
  YouTube: "fab fa-youtube-square",
  Facebook: "fab fa-facebook-square",
  Instagram: "fab fa-instagram",
  CodePen: "fab fa-codepen",
  Medium: "fab fa-medium",
};
export default {
  props: {
    link: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
      validator: (value) => Object.keys(SOCIAL_ICON_CLASS_MAP).includes(value),
    },
    extraClass: {
      type: String,
    },
  },
  computed: {
    iconClass() {
      return SOCIAL_ICON_CLASS_MAP[this.type];
    },
  },
};
</script>

<style lang="stylus">
.fa, .fab
  &-weixin
    color #1aad19
  &-weibo
    color #e6162d
  &-telegram 
    color #28a0d4
  &-github, &-gitlab, &-music, &-codepen, &-envelope 
    color #000
  &-twitter, &-twitter-square 
    color #1da1f3
  &-linkedin, &-linkedin-square 
    color #0077b5
  &-facebook, &-facebook-square 
    color #3b5998
  &-youtube, &-youtube-play, &-youtube-square 
    color #f00
  &-instagram 
    color #c13584
  &-medium 
    color #000
</style>