<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          :color="mainColor"
          dark
          absolute
          top
          right
          fab
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">📅일정 추가하기</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="schedule.title"
                  label="일정 이름*"
                  prepend-icon="mdi-format-title"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
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
                      v-model="schedule.date"
                      label="날짜*"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="schedule.date"
                    @input="isDatePicker = false"
                  ></v-date-picker>
                </v-menu>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  v-model="schedule.details"
                  label="상세 내용"
                  type="text"
                  prepend-icon="mdi-subtitles-outline"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-autocomplete
                  v-model="schedule.color"
                  :items="colors"
                  label="색"
                  chips
                  item-text="name"
                  item-value="color"
                  prepend-icon="mdi-palette"
                >
                  <template v-slot:selection="data">
                    <v-chip
                      v-bind="data.attrs"
                      :input-value="data.selected"
                      @click="data.select"
                    >
                      <v-avatar left :color="data.item.color" size="28">
                      </v-avatar>
                      {{ data.item.name }}
                    </v-chip>
                  </template>
                  <template v-slot:item="data">
                    <template>
                      <v-list-item-avatar>
                        <v-avatar :color="data.item.color" size="28"></v-avatar>
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title
                          v-html="data.item.name"
                        ></v-list-item-title>
                      </v-list-item-content>
                    </template>
                  </template>
                </v-autocomplete>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            취소
          </v-btn>
          <v-btn color="blue darken-1" text @click="onSubmit"> 저장 </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mainColor } from "../constants";

export default {
  props: {
    addEvent: {
      type: Function,
      required: true,
    },
  },
  data: () => ({
    dialog: false,
    mainColor,
    schedule: {
      title: "",
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      color: "blue",
      details: "",
    },
    colors: [
      { name: "파랑", color: "blue" },
      { name: "빨강", color: "red" },
      { name: "주황", color: "orange" },
      { name: "초록", color: "green" },
      { name: "인디고", color: "indigo" },
      { name: "딥 퍼플", color: "deep-purple" },
      { name: "싸이온", color: "cyan" },
      { name: "회색", color: "grey darken-1" },
    ],
    isAllday: false,
    isDatePicker: false,
  }),
  methods: {
    onSubmit() {
      if (!this.schedule.title) return alert("제목을 입력하세요");

      this.addEvent(this.schedule);

      this.dialog = false;
      this.schedule = {
        title: "",
        date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
          .toISOString()
          .substr(0, 10),
        color: "blue",
        details: "",
      };
    },
  },
};
</script>

<style scoped></style>
