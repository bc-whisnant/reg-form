<template>
  <v-app>
    <v-form>
      <FormWithValidation />
    </v-form>
  </v-app>
</template>

<script>
import FormWithValidation from "./components/FormWithValidation";

export default {
  name: "App",

  components: {
    FormWithValidation,
  },
};
</script>
