<template>
  <div id="exampleChecks" role="group" tabindex="-1">
    <div class="custom-control custom-checkbox custom-control-inline">
      <input
        :id="id"
        v-bind:value="value" v-on:input="$emit('input', $event.target.value)"
        type="checkbox"
        class="custom-control-input"
        true-value="1"
        false-value="0"
      />
      <label class="custom-control-label" :for="id"> {{label}} <help-tooltip :tooltip="tooltip"></help-tooltip></label>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id', 'value', 'label', 'tooltip'],
};
</script>

<style lang="scss" scoped>
</style>
