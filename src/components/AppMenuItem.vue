<template>
<li class="nav-item">
  <router-link class="nav-link" :to="{ name: target}">
    <img :src="require('@/assets/icons/' + icon)" />{{ $t(text) }}
  </router-link>
</li>
</template>

<script>
export default {
  name: 'AppMenuItem',
  props: ['text', 'icon', 'target'],
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
