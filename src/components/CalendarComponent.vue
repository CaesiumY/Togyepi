<template>
  <v-row class="fill-height ma-1">
    <v-col>
      <calendar-header
        :setToday="setToday"
        :type="type"
        :setType="setType"
        :calendarRef="$refs.calendar"
        :title="title"
      ></calendar-header>
      <v-sheet>
        <v-calendar
          ref="calendar"
          v-model="focus"
          color="primary"
          :events="events"
          :event-color="getEventColor"
          :type="type"
          @click:event="showEvent"
          @click:more="viewDay"
          @click:date="AddEvent"
          @click:day="AddEvent"
        ></v-calendar>
        <v-menu
          v-model="selectedOpen"
          :close-on-content-click="false"
          :activator="selectedElement"
          offset-x
        >
          <v-card color="grey lighten-4" min-width="350px" flat>
            <v-toolbar :color="selectedEvent.color" dark>
              <v-btn icon>
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
              <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </v-toolbar>
            <v-card-text>
              <span v-html="selectedEvent.details"></span>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="secondary" @click="selectedOpen = false">
                Cancel
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
import CalendarHeader from "./CalendarHeader.vue";

export default {
  components: {
    CalendarHeader,
  },
  data: () => ({
    focus: "",
    type: "month",
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    events: [],
    colors: [
      "blue",
      "indigo",
      "deep-purple",
      "cyan",
      "green",
      "orange",
      "grey darken-1",
    ],
    title: "",
  }),
  mounted() {
    this.$refs.calendar.checkChange();
    this.setTitle();

    this.runTest();
  },
  methods: {
    setType(type) {
      this.type = type;
    },
    viewDay({ date }) {
      this.focus = date;
      this.type = "day";
    },
    getEventColor(event) {
      return event.color;
    },
    setToday() {
      this.focus = "";
    },
    setTitle() {
      this.title = this.$refs.calendar.title.split(" ").reverse().join("년 ");
    },
    showEvent({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event;
        this.selectedElement = nativeEvent.target;
        requestAnimationFrame(() =>
          requestAnimationFrame(() => (this.selectedOpen = true))
        );
      };

      if (this.selectedOpen) {
        this.selectedOpen = false;
        requestAnimationFrame(() => requestAnimationFrame(() => open()));
      } else {
        open();
      }

      nativeEvent.stopPropagation();
    },

    AddEvent(events) {
      console.log(events);
      // Events object
      // date: "2021-06-30"
      // day: 30
      // future: false
      // hasDay: true
      // hasTime: false
      // hour: 0
      // minute: 0
      // month: 6
      // past: false
      // present: true
      // time: ""
      // weekday: 3
      // year: 2021
      // TODO - 이벤트들 중 필요한 거 골라다가 팝업 띄우며 전달해주기
      this.runTest();
    },

    rnd(a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a;
    },

    runTest() {
      this.events.push({
        id: uuidv4(),
        name: "sample event",
        start: new Date(),
        end: new Date(),
        color: this.colors[this.rnd(0, this.colors.length - 1)],
        timed: !this.rnd(0, 3) === 0,
        details: "event description",
      });
    },
  },
};
</script>
