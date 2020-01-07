<template>
  <div class="text-center">
    <img :src="require(`../assets/icons/${icon}.svg?data`)" class="mb-4" />
    <h3 class="text-danger">{{ message }}</h3>
  </div>
</template>

<script>
export default {
  name: 'CenteredErrorBox',
  props: ['icon', 'message'],
};
</script>

<style lang="scss" scoped>
@import "../scss/colors";
img {
  width:90px;
}
</style>
