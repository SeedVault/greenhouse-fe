<template>
    <div class="alert alert-danger" role="alert" v-if="validationErrors[id] !== undefined">
      <ul>
        <li v-for="err in validationErrors[id]" :key="err">
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
