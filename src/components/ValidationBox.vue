<template>
    <div class="alert alert-danger" role="alert" v-if="validationErrors[id] !== undefined">
      <ul>
        <li v-for="(err, msg) in validationErrors[id]" :key="msg">
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
