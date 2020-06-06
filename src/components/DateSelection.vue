<template>
  <v-container fluid>
    <p>Please select your check you event date:</p>
    <base-menu
      ref="hotel_checkin_menu"
      v-model="event_date_menu"
      :close-on-content-click="false"
      transition="scale-transition"
      offset-y
      full-width
      min-width="290px"
    >
      <template v-slot:input>
        <menu-input
          filled
          readonly
          prepend-inner-icon="mdi-calendar-today"
          @click="event_date_menu = !event_date_menu"
        ></menu-input>
      </template>
      <template v-slot:datepicker>
        <base-date-picker
          no-title
          v-model="form.selected_event_date"
          :minValue="minDate"
          @input="event_date_menu = false"
        ></base-date-picker>
      </template>
    </base-menu>
  </v-container>
</template>

<script>
import BaseDatePicker from "./BaseComponents/BaseDatePicker";
import BaseMenu from "./BaseComponents/BaseMenu";
import MenuInput from "./BaseComponents/MenuInput";
export default {
  data() {
    return {
      event_date_menu: false,
      minDate: Date.now(),
      form: {
        event_date: Date.now(),
        selected_event_date: "",
      },
    };
  },
  components: {
    BaseDatePicker,
    BaseMenu,
    MenuInput,
  },
};
</script>

<style></style>
