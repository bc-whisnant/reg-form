<template>
  <v-date-picker
    v-bind="$attrs"
    @input="$emit('input', $event)"
  ></v-date-picker>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
