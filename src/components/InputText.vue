<template>
  <div class="form-group">
    <label :for="id">{{ label }}</label>
    <input type="text" :id="id" v-bind:value="value" v-on:input="$emit('input', $event.target.value)" :placeholder="placeholder"
      :class="{'input-with-icon':true, 'form-control': true,
      'is-invalid':(validationErrors[id] !== undefined)}" />
    <icon-inside-input :icon="icon"></icon-inside-input>
    <validation-messages :id="id" :validationErrors="validationErrors"></validation-messages>
  </div>
</template>

<script>
export default {
  props: ['id', 'value', 'label', 'placeholder', 'icon', 'validationErrors'],
};
</script>
