<template>
  <section class="d-flex flex-column justify-center text-center">
    <article>
      <div>canvas position</div>
    </article>
    <section>
      <v-card ref="form" class="ma-5">
        <v-card-text>
          <v-btn
            v-if="position.length === 0"
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
            v-if="position"
            ref="position"
            v-model="position"
            prepend-icon="mdi-map-marker"
            label="현재 위도 경도"
          ></v-text-field>

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
                v-model="date"
                label="날짜"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="date"
              @input="isDatePicker = false"
            ></v-date-picker>
          </v-menu>

          <v-text-field
            v-for="(content, index) in contents"
            :key="index"
            ref="content"
            v-model="contents[index]"
            :rules="[() => !!content || '내용을 입력하세요']"
            prepend-icon="mdi-pencil"
            :label="`내용 ${index + 1}`"
          ></v-text-field>
        </v-card-text>
        <v-card-actions class="d-flex justify-center pb-5">
          <v-btn color="success" @click="() => contents.push([])">
            <v-icon left> mdi-plus </v-icon> 더하기
          </v-btn>

          <v-btn color="error" @click="removeContentOne">
            <v-icon left> mdi-minus </v-icon>
            빼기
          </v-btn>
        </v-card-actions>
      </v-card>

      <v-btn class="mx-3 font-weight-bold" large color="primary">
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
    isDatePicker: false,
    position: "",
    date: "",
    contents: [],
  }),
  computed: {
    form() {
      return {
        position: this.position,
        date: this.date,
        contents: this.contents.slice(),
      };
    },
  },
  methods: {
    getCurrentPosition() {
      if (!navigator.geolocation)
        return alert("위치 정보가 지원되지 않는 환경입니다.");

      const geolocationSuccess = (pos) => {
        const {
          coords: { latitude, longitude },
        } = pos;

        this.position = `위도: ${latitude.toFixed(7)} 경도: ${longitude.toFixed(
          7
        )}`;
      };
      const geolocationError = (err) => {
        console.error("Error occurred. Error code: " + err.code);
        alert("위치를 불러오는데 실패했습니다.");
        this.position = "";
      };

      navigator.geolocation.getCurrentPosition(
        geolocationSuccess,
        geolocationError
      );
    },
    removeCurrentPosition() {
      this.position = "";
    },
    removeContentOne() {
      this.contents.splice(this.contents.length - 1, 1);
    },
  },
};
</script>

<style scoped></style>
