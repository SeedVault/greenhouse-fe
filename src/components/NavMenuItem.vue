<template>
  <div>
    <template v-if="type == 'divider'">
      <div class="dropdown-divider"></div>
    </template>
    <template v-else-if="type == 'group'">
      <li class="group-title" :style="this.styles">
        {{ $t(text) }}
      </li>
    </template>
    <template v-else>
    <template v-if="target">
      <b-nav-item :to="{ name: target}">
        <div class="d-flex flex-row">
          <div class="ml-2 mr-3"><img :src="require(`../assets/icons/${icon}.svg?data`)" /></div>
          <div class="nav-link-text">{{ $t(text) }}</div>
        </div>
      </b-nav-item>
    </template>
    <template v-else>
      <a class="nav-link" :href="seedAppUrl(url)">
        <div class="d-flex flex-row">
          <div class="ml-2 mr-3"><img :src="require(`../assets/icons/${icon}.svg?data`)" /></div>
          <div class="nav-link-text">{{ $t(text) }}</div>
        </div>
      </a>
    </template>
    </template>
  </div>
</template>

<script>
import { reactive, toRefs } from '@vue/composition-api';

export default {
  name: 'NavMenuItem',
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

  .nav-link-text {
    color: #686b77;
    &:hover {
      color: #6b4c9f;
    }
  }
  img {
    width: 18px;
    text-align: right;
  }
  &.active {
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

.group-title {
  text-transform: uppercase;
  padding-left: 20px;
  color:  #686b77;
  font-weight: bold;
  font-size: 12px;
  padding-top: 13px;
  padding-bottom: 10px;
}
</style>
