<template>
  <base-menu
    ref="hotel_checkin_menu"
    v-model="hotel_checkin_menu"
    :close-on-content-click="false"
    transition="scale-transition"
    offset-y
    full-width
    min-width="290px"
  >
    <template v-slot:input>
      <base-input
        filled
        v-model="prettyCheckin"
        prepend-inner-icon="mdi-calendar-today"
        readonly
        @input="hotel_checkin_menu = true"
      ></base-input>
    </template>
    <template v-slot:datepicker>
      <base-datepicker
        no-title
        v-model="form.hotel.reservation.start_date"
        :min="checkinMinDate"
        :max="checkinMaxDate"
        @input="hotel_checkin_menu = false"
      ></base-datepicker>
    </template>
  </base-menu>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
