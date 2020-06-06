<template>
  <v-container class="px-0">
    <v-card flat class="mx-auto mt-5" max-width="">
      <v-card-title class="px-2">Registration</v-card-title>
      <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
        <v-form @submit.prevent="handleSubmit(onSubmit)">
          <validation-provider v-slot="{ errors }" name="first_name" rules="required">
          <v-col cols="12">
            <BaseInputWithValidation label="First Name" v-model="form.first_name" :error-messages="errors"/>
          </v-col>
          </validation-provider>
          <validation-provider v-slot="{ errors }" name="last_name" rules="required">
          <v-col cols="12">
            <BaseInputWithValidation label="Last Name" v-model="form.last_name" :error-messages="errors" />
          </v-col>
          </validation-provider>
          <validation-provider v-slot="{ errors }" name="email_name" rules="required|email">
          <v-col cols="12">
            <BaseInputWithValidation label="Email" v-model="form.email" :error-messages="errors"/>
          </v-col>
          </validation-provider>
          
        </v-form>
      </ValidationObserver>
      <v-card-actions>
         <v-spacer></v-spacer>
          <v-btn @click="submit">Submit</v-btn>
          <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
  import { withValidation, ValidationObserver, ValidationProvider } from 'vee-validate'
  import BaseInput from "./BaseComponents/BaseInput";

  const BaseInputWithValidation = withValidation(BaseInput)
export default {
  data() {
    return {
      form: {
        first_name: "",
        last_name: "",
        email: "",
      },
    };
  },
  components: {
    BaseInputWithValidation,
    ValidationObserver,
    ValidationProvider
  },
  methods: {
    submit() {
      this.$refs.observer.validate()
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 500px;
}
</style>
