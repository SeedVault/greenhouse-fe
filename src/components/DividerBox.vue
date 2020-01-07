<template>
  <div class="card box">
    <div class="card-body">
      <slot name="top"></slot>
    </div>
    <div class="shadow-ruler">
      <div class="card-body">
        <router-view ref="childList"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DividerBox',
  props: ['title'],
};
</script>

<style lang="scss" scoped>
.box {
  border: 0;
  box-shadow: 0 8px 14px 0 rgba(224,229,238,.5);
}

.shadow-ruler {
  border: 0;
  -webkit-box-shadow: 0px -4px 5px rgba(224, 229, 238, 0.4);
  box-shadow: 0px -4px 5px rgba(224, 229, 238, 0.4);
  margin-bottom: 32px;
}
</style>
