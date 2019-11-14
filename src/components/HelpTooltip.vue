<template>
  <img :src="require('@/assets/icons/outline-help_outline-24px@2x.svg')"
  class="help-tooltip" v-b-popover.hover="popoverConfig"
  v-if="typeof tooltip == 'string' && tooltip.length > 0" />
</template>
<script>
import marked from 'marked';
import DOMPurify from 'dompurify';

export default {
  name: 'HelpTooltip',
  props: ['tooltip'],
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
