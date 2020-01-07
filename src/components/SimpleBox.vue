<template>
  <div class="card box mb-4-5">
    <div class="card-header" v-show="typeof title !== 'undefined'">
      <h4>{{ title }}</h4>
    </div>
    <div class="card-body pb-4-5">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SimpleBox',
  props: ['title'],
};
</script>

<style lang="scss" scoped>
.box {
  border: 0;
  box-shadow: 0 8px 14px 0 rgba(224,229,238,.5);
}
</style>
