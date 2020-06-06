import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import { extend, } from 'vee-validate';
import { required, email }from 'vee-validate/dist/rules'

extend('required', {
  ...required,
  message: 'This field is required'
});

extend('email', {
  ...email,
  message: 'Invalid email format'
});


Vue.config.productionTip = false

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
