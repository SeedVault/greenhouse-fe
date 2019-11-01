<template>
  <div class="form-group">
    <label :for="id">{{ label }} <help-tooltip :tooltip="tooltip"></help-tooltip></label>
    <input type="password" :id="id" v-bind:value="value" v-on:input="$emit('input', $event.target.value)" :placeholder="placeholder"
      :class="{'input-with-icon':true, 'form-control': true,
      'is-invalid':(validationErrors[id] !== undefined)}" />
    <icon-inside-input :icon="icon"></icon-inside-input>
    <validation-messages :id="id" :validationErrors="validationErrors"></validation-messages>
  </div>
</template>

<script>
export default {
  props: ['id', 'value', 'label', 'placeholder', 'icon', 'tooltip', 'validationErrors'],
};
</script>
