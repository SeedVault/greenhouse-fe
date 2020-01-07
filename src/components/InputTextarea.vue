<template>
  <div class="form-group">
    <label :for="id">{{ label }} <help-tooltip :tooltip="tooltip"></help-tooltip></label>
    <div class="input-group input-group-lg"
      v-bind:class="{'input-group-focus': focus,
      'input-group-is-invalid': isInvalid(),
      'input-group-is-invalid-focus': focus && isInvalid() }">
      <div class="input-group-prepend">
        <span class="input-group-text input-group-textarea input-group-icon">
          <img :src="require(`../assets/icons/${icon}.svg?data`)" />
        </span>
      </div>
      <textarea :id="id"
        v-bind:value="value"
        v-bind:class="{'form-control': true, 'is-invalid': isInvalid() }"
        v-on:input="$emit('input', $event.target.value)"
        v-on:focus="onFocus"
        v-on:blur="onBlur"
        :placeholder="placeholder"
        :rows="rows"
      ></textarea>
    </div>
    <validation-messages :id="id" :validationErrors="validationErrors"></validation-messages>
  </div>
</template>

<script>
import HelpTooltip from 'seed-theme/src/components/HelpTooltip.vue';
import { reactive, toRefs } from '@vue/composition-api';

export default {
  components: {
    HelpTooltip,
  },
  props: ['id', 'value', 'label', 'placeholder', 'icon', 'rows', 'tooltip', 'validationErrors'],
  setup(props) {
    const data = reactive({
      focus: false,
    });

    function onFocus() {
      data.focus = true;
    }

    function onBlur() {
      data.focus = false;
    }

    function isInvalid() {
      return (props.validationErrors[props.id] !== undefined);
    }

    return {
      ...toRefs(data), onFocus, onBlur, isInvalid,
    };
  },
};
</script>

<style lang="scss" scoped>
.input-group-textarea {
  align-items: start;
}
textarea {
  border: none;
  background-color: transparent;
  box-shadow: none;
}
input{
  border:none;
  background-color: transparent;
  box-shadow: none;
}
input:focus {
  outline: none;
  background-color: transparent;
  box-shadow: none;
}
</style>
