<template>
  <section>
    <v-card ref="form" class="ma-5">
      <v-card-text>
        <v-btn
          v-if="value.position.length === 0"
          class="mx-12 my-3 font-weight-bold text-button"
          outlined
          rounded
          large
          :color="mainColor"
          @click="getCurrentPosition"
        >
          <v-icon left> mdi-crosshairs-gps </v-icon> 내 위치 받아오기
        </v-btn>
        <v-btn
          v-else
          class="mx-12 my-3 font-weight-bold text-button"
          outlined
          rounded
          large
          color="error"
          @click="removeCurrentPosition"
        >
          <v-icon left> mdi-crosshairs-gps </v-icon> 내 위치 지우기
        </v-btn>
        <v-text-field
          v-if="value.position"
          ref="position"
          v-model="value.position"
          prepend-icon="mdi-map-marker"
          label="현재 위도 경도"
          readonly
        ></v-text-field>
        <p>{{ value }}</p>
        <v-menu
          v-model="isDatePicker"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="value.date"
              label="날짜"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
              clearable
            ></v-text-field>
          </template>
          <v-date-picker
            locale="ko-KR"
            :day-format="(day) => parseInt(day.split('-')[2])"
            v-model="value.date"
            @input="isDatePicker = false"
          ></v-date-picker>
        </v-menu>

        <v-text-field
          v-for="(content, index) in value.contents"
          :key="index"
          ref="content"
          v-model="value.contents[index]"
          :rules="[() => !!content || '내용을 입력하세요']"
          prepend-icon="mdi-pencil"
          :label="`내용 ${index + 1}`"
        ></v-text-field>
      </v-card-text>
      <v-card-actions class="d-flex justify-center pb-5">
        <v-btn color="success" @click="() => value.contents.push([])">
          <v-icon left> mdi-plus </v-icon> 더하기
        </v-btn>

        <v-btn
          v-if="value.contents.length !== 0"
          color="error"
          @click="removeContentOne"
        >
          <v-icon left> mdi-minus </v-icon>
          빼기
        </v-btn>
      </v-card-actions>
    </v-card>

    <v-btn
      class="mx-3 font-weight-bold"
      large
      color="primary"
      @click="$emit('drawCanvas')"
      :disabled="!image"
      :loading="isLoading"
    >
      <v-icon left> mdi-pencil </v-icon> 그리기
    </v-btn>
  </section>
</template>

<script>
import { mainColor } from "../constants";

export default {
  props: {
    value: {
      type: Object,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    isLoading: {
      type: Boolean,
      required: true,
    },
  },
  data: () => ({
    mainColor,
    isDatePicker: false,
  }),
  methods: {
    removeCurrentPosition() {
      this.value.position = "";
    },
    getCurrentPosition() {
      if (!navigator.geolocation)
        return alert("위치 정보가 지원되지 않는 환경입니다.");

      const geolocationSuccess = (pos) => {
        const {
          coords: { latitude, longitude },
        } = pos;

        this.value.position = `위도: ${latitude.toFixed(
          7
        )} 경도: ${longitude.toFixed(7)}`;
      };
      const geolocationError = (err) => {
        console.error(err);
        alert("위치를 불러오는데 실패했습니다.");
        this.value.position = "";
      };

      navigator.geolocation.getCurrentPosition(
        geolocationSuccess,
        geolocationError
      );
    },
    removeContentOne() {
      this.value.contents.splice(this.value.contents.length - 1, 1);
    },
  },
};
</script>

<style scoped></style>
