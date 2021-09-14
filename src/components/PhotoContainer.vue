<template>
  <section class="d-flex flex-column justify-center text-center">
    <article>
      <div>canvas position</div>
    </article>
    <section>
      <v-btn
        class="mx-12 my-5 font-weight-bold text-button"
        outlined
        rounded
        large
        :color="mainColor"
      >
        <v-icon left> mdi-crosshairs-gps </v-icon> 내 위치 받아오기
      </v-btn>

      <div>form section</div>

      <v-btn class="mx-12 my-5 font-weight-bold" large color="primary">
        <v-icon left> mdi-pencil </v-icon> 그리기
      </v-btn>
    </section>
  </section>
</template>

<script>
import { mainColor } from "../constants";

export default {
  data: () => ({
    mainColor,
  }),
};
</script>

<style scoped></style>
