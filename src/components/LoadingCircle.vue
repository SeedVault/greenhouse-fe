<template>
  <div class="row" v-show="loading">
    <div class="col-lg-12 text-center">
      <div v-bind:class="[{ 'load-complete': !loading }, 'circle-loader circle-small']"></div>
      <div class="loading-text">{{ $t('common.please_wait') }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoadingCircle',
  props: ['loading'],
}
</script>

<style lang="scss" scoped>
.circle-small {
  width: 4em;
  height: 4em;
  margin-top: 20%;
  margin-bottom: 1em;
}
.loading-text {
  color: #c7c8c8;
  margin-bottom: 20%;
  font-weight: bold;
}
</style>
