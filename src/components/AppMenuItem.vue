<template>
  <div>
    <template v-if="type == 'divider'">
      <li class="menu--divider"></li>
    </template>
    <template v-else-if="type == 'group'">
      <li class="group-title" :style="this.styles">
        {{ $t(text) }}
      </li>
    </template>
    <template v-else>
      <li class="nav-item" :style="this.styles">
        <template v-if="target">
          <router-link class="nav-link" :to="{ name: target}">
              <img :src="require('@/assets/icons/' + icon)" />{{ $t(text) }}
            </router-link>
        </template>
        <template v-else>
          <a class="nav-link" :href="seedAppUrl(url)">
            <img :src="require('@/assets/icons/' + icon)" />{{ $t(text) }}
          </a>
        </template>
      </li>
    </template>
  </div>
</template>

<script>
export default {
  name: 'AppMenuItem',
  props: ['type', 'text', 'icon', 'target', 'url', 'styles'],
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

  .menu--divider {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid #dedfe0;
  }

  .group-title {
    text-transform: uppercase;
    padding-left: 20px;
    color: #686b77;
    font-weight: bold;
    font-size: 12px;
    padding-top: 13px;
    padding-bottom: 10px;
  }
</style>
