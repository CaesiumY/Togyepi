<template>
  <article class="mx-5">
    <canvas class="my-5" ref="snapshot"> </canvas>
    <img v-if="image" class="my-5 captured-image" :src="image" ref="preview" />
    <v-file-input
      v-if="image.length === 0"
      accept="image/png, image/jpeg"
      prepend-icon="mdi-camera"
      label="사진을 넣어주세요"
      show-size
      @change="setImageInput"
    ></v-file-input>
    <v-btn v-else color="error" @click="removeDrawing">
      <v-icon left> mdi-minus </v-icon>
      그림 지우기
    </v-btn>
  </article>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    image: "",
  }),
  computed: {},
  mounted() {
    this.image = this.value;
  },
  methods: {
    setImageInput(item) {
      const reader = new FileReader();

      reader.onload = (e) => {
        this.image = e.target.result;
        this.$emit("input", e.target.result);
      };
      reader.readAsDataURL(item);
    },
    removeDrawing() {
      this.image = "";
    },
  },
};
</script>

<style scoped>
canvas {
  border: 1px solid #bbb;
  display: none;
}

.captured-image {
  width: 100%;
}
</style>
