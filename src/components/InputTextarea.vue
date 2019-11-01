<template>
  <div class="form-group">
    <label :for="id">{{ label }} <help-tooltip :tooltip="tooltip"></help-tooltip></label>
    <textarea :id="id" v-bind:value="value" v-on:input="$emit('input', $event.target.value)" :placeholder="placeholder"
      :class="{'textarea-with-icon':true, 'form-control': true,
      'is-invalid':(validationErrors[id] !== undefined)}" :rows="rows"></textarea>
    <icon-inside-textarea :icon="icon"></icon-inside-textarea>
    <validation-messages :id="id" :validationErrors="validationErrors"></validation-messages>
  </div>
</template>

<script>
export default {
  props: ['id', 'value', 'label', 'placeholder', 'icon', 'rows', 'tooltip', 'validationErrors'],
};
</script>
