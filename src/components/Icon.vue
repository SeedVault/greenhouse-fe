<template>
  <img :src="require(`../assets/icons/${icon}.svg?data`)" />
</template>
<script>
export default {
  name: 'Icon',
  props: ['icon'],
};
</script>
