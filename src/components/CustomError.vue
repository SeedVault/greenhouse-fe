<template>
  <div class="row">
    <div class="col-lg-12 text-center">
      <template v-if="title">
        <h1 class="display-1">{{ title }}</h1>
      </template>
      <img class="mt-5 mb-4" :src="require(`../assets/images/error.svg?data`)" />
      <template v-if="subtitle">
        <h4>{{ subtitle }}</h4>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomError',
  props: ['title', 'subtitle'],
};
</script>

<style lang="scss" scoped>
h1 {
  color: #80619c;
}

img {
  width: 100px;
}

h4 {
  color: #80619c;
}
</style>
