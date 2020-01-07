<template>
  <select :id="id"
    v-bind:value="value"
    class="custom-select custom-select-sm thin-borders cursor-pointer"
    v-on:input="$emit('input', $event.target.value)"
    v-on:change="$emit('change', $event.target.value)">
    <option v-for="option in options" :value="option.value" v-bind:key="option.value">
      {{ option.text }}
    </option>
  </select>
</template>

<script>
export default {
  props: ['id', 'value', 'options'],
};
</script>
