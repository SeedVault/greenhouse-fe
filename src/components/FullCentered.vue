<template>
  <div class="container min-vh-100 d-flex flex-column">
    <div class="row flex-fill mx-auto align-items-center">
      <slot name="main"></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: 'FullCentered',
};

</script>
