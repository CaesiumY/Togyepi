<template>
  <v-menu
    v-model="selectedOpen"
    :close-on-content-click="false"
    :activator="selectedElement"
    offset-x
  >
    <v-card color="grey lighten-4" min-width="350px" flat>
      <v-toolbar :color="selectedEvent.color" dark>
        <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn class="mx-1" icon @click="removeSelectedEvent">
          <v-icon>mdi-trash-can-outline</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-text v-if="selectedEvent.details">
        <span v-html="selectedEvent.details"></span>
      </v-card-text>
    </v-card>
  </v-menu>
</template>

<script>
export default {
  props: {
    removeEvent: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      selectedEvent: {},
      selectedElement: null,
      selectedOpen: false,
    };
  },
  methods: {
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

    removeSelectedEvent() {
      const isConfirmed = confirm(
        `${this.selectedEvent.name} 일정을 삭제하시겠습니까?`
      );
      if (!isConfirmed) return;

      const { id } = this.selectedEvent;
      this.removeEvent(id);
      this.selectedOpen = false;
    },
  },
};
</script>

<style scoped></style>
