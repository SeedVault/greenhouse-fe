<template>
  <div class="form-group">
    <label :for="id">{{ label }}</label>
    <select :id="id" :placeholder="placeholder"
      :value="value" @input="$emit('input', $event.target.value)"
      :class="{'input-with-icon':true, 'form-control': true,
      'is-invalid':(validationErrors[id] !== undefined)}">
        <option v-for="option in options" :value="option.value">{{ option.text }}</option>
    </select>
    <icon-inside-input :icon="icon"></icon-inside-input>
    <validation-messages :id="id" :validationErrors="validationErrors"></validation-messages>
  </div>
</template>

<script>
export default {
  props: ['id', 'value', 'label', 'placeholder', 'icon', 'options', 'validationErrors'],
};
</script>
