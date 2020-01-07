<template>
  <div class="card box mb-4-5">
    <div class="card-body pb-4-5">
      <div class="card-title mb-4">
        <router-link class="back" :to="to">
          <icon icon="chevron-left" />
          {{ $t('common.back') }}
        </router-link>
      </div>
        <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BackBox',
  props: ['to'],
};
</script>

<style lang="scss" scoped>
.box {
  border: 0;
  box-shadow: 0 8px 14px 0 rgba(224,229,238,.5);
}

</style>
