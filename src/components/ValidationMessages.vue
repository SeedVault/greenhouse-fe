<template>
  <div class="validation-message-error mt-1" v-if="typeof(validationErrors[id]) !== undefined">
    <ul>
      <li v-for="(err, index) in validationErrors[id]" :key="index">
        {{ $t(err.msg) }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['id', 'validationErrors'],
};
</script>
