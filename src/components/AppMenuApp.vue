<template>
<li class="nav-item">
  <a class="nav-link" :href="seedAppUrl(url)">
    <img :src="require('@/assets/icons/' + icon)" />{{ $t(text) }}
  </a>
</li>
</template>

<script>
export default {
  name: 'AppMenuApp',
  props: ['text', 'icon', 'url'],
  methods: {
    seedAppUrl(url) {
      return url.replace(/{{ locale }}/, this.lang);
    }
  },
  computed: {
    lang() {
      return this.$store.getters.lang
    },
  },
}
</script>

<style lang="scss" scoped>
  a {
    font-size: 16px;
    padding: 13px 20px 13px 20px;
    color: #686b77;
    img {
      padding-right: 10px;
      width: 28px;
      text-align: right;
    }

    &.active {
      background: rgba(107,76,159,.15);
      border-radius: 8px;
      color: #6b4c9f;
      font-weight: 500;
      img {
        filter: invert(38%) sepia(13%) saturate(2389%) hue-rotate(221deg) brightness(75%) contrast(92%);
      }
    }

    &:hover {
      color: #6b4c9f;
      font-weight: 500;
      img {
        filter: invert(38%) sepia(13%) saturate(2389%) hue-rotate(221deg) brightness(75%) contrast(92%);
      }
    }
  }
</style>
