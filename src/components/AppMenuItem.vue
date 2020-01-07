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
            <div class="d-flex flex-row">
              <div class="mr-3"><img :src="require(`../assets/icons/${icon}.svg?data`)" /></div>
              <div class="">{{ $t(text) }}</div>
            </div>
          </router-link>
        </template>
        <template v-else>
          <a class="nav-link" :href="seedAppUrl(url)">
            <div class="d-flex flex-row">
              <div class="mr-3"><img :src="require(`../assets/icons/${icon}.svg?data`)" /></div>
              <div class="">{{ $t(text) }}</div>
            </div>
          </a>
        </template>
      </li>
    </template>
  </div>
</template>

<script>
import { reactive, toRefs } from '@vue/composition-api';

export default {
  name: 'AppMenuItem',
  props: ['type', 'text', 'icon', 'target', 'url', 'styles'],
  setup(props, context) {
    const data = reactive({ });

    function seedAppUrl(url) {
      return url.replace(/{{ locale }}/, context.root.$store.getters.lang);
    }

    return {
      ...toRefs(data), seedAppUrl,
    };
  },
};
</script>

<style lang="scss" scoped>
  a {
    font-size: 16px;
    padding: 13px 18px;
    color: #686b77;
    img {
      // padding-right: 10px;
      width: 18px;
      text-align: right;
    }

    &.active {
      background: rgba(107,76,159,.15);
      border-radius: 8px;
      color: #6b4c9f;
      font-weight: 500;
      img {
        filter: invert(38%) sepia(13%) saturate(2389%) hue-rotate(221deg)
        brightness(75%) contrast(92%);
      }
    }

    &:hover {
      color: #6b4c9f;
      font-weight: 500;
      img {
        filter: invert(38%) sepia(13%) saturate(2389%) hue-rotate(221deg)
        brightness(75%) contrast(92%);
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
