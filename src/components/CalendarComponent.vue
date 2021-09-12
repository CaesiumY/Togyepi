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
          <calendar-card
            ref="calendarCard"
            :removeEvent="removeEvent"
          ></calendar-card>
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
import {
  LOCALSTORAGE_EVENT_KEY,
  loadFromLocalStorage,
  saveToLocalStorage,
} from "../utils/localStorage";

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
    isShowModal: false,
  }),
  mounted() {
    this.$refs.calendar.checkChange();
    this.fetchData();
  },

  methods: {
    fetchData() {
      const data = loadFromLocalStorage(LOCALSTORAGE_EVENT_KEY);
      if (data) this.events = data;
    },
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

    addEvent(eventData) {
      const { date, title } = eventData;

      const newEvent = {
        ...eventData,
        id: uuidv4(),
        name: title,
        start: date,
        end: date,
      };

      this.events.push(newEvent);
      saveToLocalStorage(LOCALSTORAGE_EVENT_KEY, this.events);
    },

    removeEvent(id) {
      const eventData = loadFromLocalStorage(LOCALSTORAGE_EVENT_KEY);
      const seletedItem = eventData.find((item) => item.id == id);

      const nextData = eventData.filter((item) => item.id !== seletedItem.id);
      saveToLocalStorage(LOCALSTORAGE_EVENT_KEY, nextData);
      this.fetchData();
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
