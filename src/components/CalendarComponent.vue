<template>
  <section>
    <v-row class="fill-height ma-1">
      <v-col>
        <calendar-header
          :setToday="setToday"
          :type="type"
          :setType="setType"
          :calendarRef="$refs.calendar"
        >
        </calendar-header>
        <v-sheet>
          <v-calendar
            ref="calendar"
            v-model="focus"
            color="primary"
            :events="events"
            :event-color="getEventColor"
            :type="type"
            @click:event="onClickEvent"
            @click:more="viewDay"
          ></v-calendar>
          <calendar-card ref="calendarCard"></calendar-card>
        </v-sheet>
      </v-col>
    </v-row>
    <div class="modal-container mt-5">
      <calendar-modal :addEvent="addEvent"></calendar-modal>
    </div>
  </section>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
import CalendarHeader from "./CalendarHeader.vue";
import CalendarCard from "./CalendarCard.vue";
import CalendarModal from "./CalendarModal.vue";

export default {
  components: {
    CalendarHeader,
    CalendarCard,
    CalendarModal,
  },
  data: () => ({
    focus: "",
    type: "month",
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
    isShowModal: false,
  }),
  mounted() {
    this.$refs.calendar.checkChange();

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
    onClickEvent(e) {
      this.$refs.calendarCard.showEvent(e);
    },

    toggleModal() {
      this.isShowModal = !this.isShowModal;
    },

    addEvent(events) {
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

<style scoped>
.modal-container {
  position: relative;
}
</style>
;
