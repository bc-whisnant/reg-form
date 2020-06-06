<template>
  <v-menu v-bind="$attrs" @click="$emit('click', $event)">
    <template v-slot:activator="{ on }">
      <slot name="input" v-on="on"></slot>
    </template>
    <slot name="datepicker"></slot>
  </v-menu>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
