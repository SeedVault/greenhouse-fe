<template>
  <div class="container mt-5 mb-5 d-flex flex-column">
    <div class="row flex-fill mx-auto align-items-center">
      <slot name="main"></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: 'LittleCentered',
};

</script>
