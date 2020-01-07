<template>
  <img src="../assets/icons/help.svg?data"
  class="help-tooltip" v-b-popover.hover="popoverConfig"
  v-if="typeof tooltip == 'string' && tooltip.length > 0" />
</template>
<script>
import marked from 'marked';
import DOMPurify from 'dompurify';
import { VBPopover } from 'bootstrap-vue';

// Note: Vue automatically prefixes the directive name with 'v-'

export default {
  name: 'HelpTooltip',
  props: ['tooltip'],
  directives: {
    // Note that Vue automatically prefixes directive names with `v-`
    'b-popover': VBPopover,
  },
  computed: {
    popoverConfig() {
      return {
        html: true,
        content: () => DOMPurify.sanitize(marked(this.tooltip), { SAFE_FOR_JQUERY: true }),
      };
    },
  },
};
</script>
<style lang="scss" scoped>
  .help-tooltip {
    width: 14px;
    height: 14;
    position: relative;
    top: -1px;
    left: 5px;

    &:hover {
      cursor:pointer;
    }
  }
</style>
