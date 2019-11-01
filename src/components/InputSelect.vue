<template>
  <div class="form-group">
    <label :for="id">{{ label }} <help-tooltip :tooltip="tooltip"></help-tooltip></label>
    <select :id="id" :placeholder="placeholder"
      :value="value" @input="$emit('input', $event.target.value)"
      :class="{'input-with-icon':true, 'form-control': true,
      'is-invalid':(validationErrors[id] !== undefined)}">
        <option v-for="option in options" :value="option.value" v-bind:key="option.value" >
          {{ option.text }}
        </option>
    </select>
    <icon-inside-input :icon="icon"></icon-inside-input>
    <validation-messages :id="id" :validationErrors="validationErrors"></validation-messages>
  </div>
</template>

<script>
export default {
  props: ['id', 'value', 'label', 'placeholder', 'icon', 'options', 'tooltip', 'validationErrors'],
};
</script>
