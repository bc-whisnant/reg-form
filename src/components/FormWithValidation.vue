<template>
  <v-container class="px-0">
    <v-card flat class="mx-auto mt-5" max-width="" v-if="!submitted || !valid">
      <v-card-title class="px-2">Registration</v-card-title>
      <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
        <v-form @submit.prevent="handleSubmit(onSubmit)" data-cy="form">
          <validation-provider v-slot="{ errors }" name="first_name" rules="required">
          <v-col cols="12">
            <BaseInputWithValidation id="first_name" label="First Name" v-model="form.first_name" :error-messages="errors" data-cy="first_name"/>
          </v-col>
          </validation-provider>
          <validation-provider v-slot="{ errors }" name="last_name" rules="required">
          <v-col cols="12">
            <BaseInputWithValidation id="last_name" label="Last Name" v-model="form.last_name" :error-messages="errors" data-cy="last_name"/>
          </v-col>
          </validation-provider>
          <validation-provider v-slot="{ errors }" name="email_name" rules="required|email">
          <v-col cols="12">
            <BaseInputWithValidation id="email" label="Email" v-model="form.email" :error-messages="errors" data-cy="email"/>
          </v-col>
          </validation-provider>
          
        </v-form>
      </ValidationObserver>
      <v-card-actions>
         <v-spacer></v-spacer>
          <v-btn @click="submitAndValidate" id="submit_btn" data-cy="submit_btn">Submit</v-btn>
          <v-spacer></v-spacer>
      </v-card-actions>
     
    </v-card>
    <v-card flat class="mx-auto mt-5" max-width="" v-else>
      <v-card-title class="px-2">Success!</v-card-title>
       <h3>Your information has been submitted</h3>
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
      submitted: false,
      valid: false
    };
  },
  components: {
    BaseInputWithValidation,
    ValidationObserver,
    ValidationProvider
  },
  methods: {
    async submitAndValidate() {
      let valid = await this.$refs.observer.validate()

      if(!valid) {
        this.submitted = false
      } else {
        this.submitted = true
        this.valid = true
      }
      
      
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 500px;
}
</style>
