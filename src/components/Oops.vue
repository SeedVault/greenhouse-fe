<template>
  <div class="row">
    <div class="col-lg-12 text-center">
      <h1>{{ $t('common.oops') }}</h1>
      <img src="@/assets/images/error.svg" width="100px" />
      <h4>{{ $t('common.something_went_wrong') }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Oops',
}
</script>

<style lang="scss" scoped>
h1 {
  margin-top: 10%;
  color: #80619c;
  font-weight: bold;
  font-size: 3rem;
}

img {
  margin-top: 30px;
  margin-bottom: 20px;
}

h4 {
  color: #80619c;
  margin-bottom: 20%;
}
</style>
