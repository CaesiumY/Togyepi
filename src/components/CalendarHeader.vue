<template>
  <v-sheet height="64">
    <v-toolbar flat>
      <v-btn
        fab
        text
        x-small
        color="grey darken-2"
        class="mr-3"
        @click="setToday"
      >
        Today
      </v-btn>
      <v-btn fab text x-small color="grey darken-2" @click="prev">
        <v-icon small> mdi-chevron-left </v-icon>
      </v-btn>
      <v-btn fab text x-small color="grey darken-2" @click="next">
        <v-icon small> mdi-chevron-right </v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-title class="mx-auto">
        {{ this.getTitle }}
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu bottom right>
        <template v-slot:activator="{ on, attrs }">
          <v-btn outlined color="grey darken-2" v-bind="attrs" v-on="on">
            <span>{{ typeToLabel[type] }}</span>
            <v-icon right> mdi-menu-down </v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="typeName in calendarType"
            :key="typeName"
            @click="() => setType(`${typeName}`)"
          >
            <v-list-item-title>{{ typeName.toUpperCase() }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-toolbar>
  </v-sheet>
</template>

<script>
export default {
  props: {
    setToday: {
      type: Function,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    setType: {
      type: Function,
      required: true,
    },
    calendarRef: {
      required: true,
    },
  },
  data() {
    return {
      typeToLabel: {
        month: "Month",
        week: "Week",
        day: "Day",
        "4day": "4 Days",
      },
      calendarType: ["day", "week", "month", "4day"],
    };
  },
  computed: {
    getTitle() {
      return (
        this.calendarRef &&
        this.calendarRef.title.split(" ").reverse().join("년 ")
      );
    },
  },
  methods: {
    prev() {
      this.calendarRef.prev();
    },
    next() {
      this.calendarRef.next();
    },
  },
};
</script>

<style scoped></style>
