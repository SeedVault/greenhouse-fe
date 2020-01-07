<template>
  <div class="form-group" style="margin-bottom: -1rem">
    <div class="input-group"
      v-bind:class="{'input-group-focus': focus,
      'input-group-is-invalid': isInvalid(),
      'input-group-is-invalid-focus': focus && isInvalid() }">
      <input type="text" :id="id"
        v-bind:value="value"
        v-bind:class="{'form-control': true, 'is-invalid': isInvalid() }"
        v-on:input="$emit('input', $event.target.value)"
        v-on:keydown.enter.prevent="doSearch"
        v-on:focus="onFocus"
        v-on:blur="onBlur"
        :placeholder="placeholder"
      />
      <div class="input-group-append">
      <span class="input-group-text input-group-icon search-button" @click.prevent="doSearch">
        <icon icon="search" />
      </span>
    </div>
    </div>
    <validation-messages :id="id" :validationErrors="validationErrors"></validation-messages>
  </div>
</template>

<script>
import { reactive, toRefs } from '@vue/composition-api';

export default {
  props: ['id', 'value', 'label', 'placeholder', 'validationErrors'],
  setup(props, context) {
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

    function doSearch() {
      if (props.value !== '') {
        context.emit('do-search', props.value);
      }
    }

    return {
      ...toRefs(data), onFocus, onBlur, isInvalid, doSearch,
    };
  },
};
</script>

<style lang="scss" scoped>
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
.search-button {
  background-color: red;
  border: 3;
  padding-left: 1px;
  &:hover {
    cursor: pointer;
  }
}
</style>
