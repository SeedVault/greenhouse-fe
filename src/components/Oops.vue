<template>
  <div class="row">
    <div class="col-lg-12 text-center">
      <h1 class="display-1">{{ $t('common.oops') }}</h1>
      <img class="mt-5 mb-4" :src="require(`../assets/images/error.svg?data`)" />
      <h4>{{ $t('common.something_went_wrong') }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Oops',
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
