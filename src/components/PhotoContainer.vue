<template>
  <section class="d-flex flex-column justify-center text-center my-5">
    <canvas-input v-model="image" ref="canvasInput"></canvas-input>
    <canvas-form
      v-model="form"
      :image="image"
      :isLoading="isLoading"
      @drawCanvas="drawCanvas"
    ></canvas-form>
  </section>
</template>

<script>
import CanvasInput from "./CanvasInput.vue";
import CanvasForm from "./CanvasForm.vue";

export default {
  components: {
    CanvasInput,
    CanvasForm,
  },
  data: () => ({
    image: "",
    isLoading: false,
    form: {
      position: "",
      date: "",
      contents: [],
    },
  }),
  watch: {
    date() {
      if (this.date === null) this.date = "";
    },
  },
  methods: {
    async drawCanvas() {
      const { position, date, contents } = this.form;

      if ((!position && !date && contents.length === 0) || !this.image) return;

      this.isLoading = true;
      const { canvasInput } = this.$refs;
      console.log("input", canvasInput);
      const canvas = canvasInput.$refs.snapshot;
      const ctx = canvas.getContext("2d");

      // NOTE new Image()로 불러온 데이터의 width, height 가져오기가 늦어지면 간헐적으로 오류 발생 -> 일단 Promise로 해결되는지 지켜보기
      const getPromisedImage = new Promise((resolve) => {
        const imageSrc = new Image();
        imageSrc.src = this.image;

        resolve(imageSrc);
      });

      const promisedImage = await getPromisedImage;
      canvas.width = promisedImage.width;
      canvas.height = promisedImage.height;

      const fontSize = promisedImage.width / 30;
      const margin = fontSize / 2;
      const startLine = date || position ? fontSize * 1.5 : 0;

      ctx.fillStyle = "white";
      ctx.lineWidth = "1";
      ctx.font = `${fontSize}px roboto`;

      ctx.drawImage(promisedImage, 0, 0, canvas.width, canvas.height);

      if (date || position) {
        const dateWidth = Math.round(ctx.measureText(date).width) + margin;
        const positionWidth =
          Math.round(ctx.measureText(position).width) + margin;

        ctx.fillRect(0, 0, dateWidth + positionWidth, startLine);
      }

      for (let i = 0; i < contents.length; i++) {
        if (contents[i].length === 0) continue;
        ctx.fillRect(
          0,
          startLine + i * fontSize,
          ctx.measureText(contents[i]).width + margin,
          fontSize * 1.2
        );
      }

      ctx.fillStyle = "black";
      ctx.fillText(`${date ? date : ""} ${position}`, 0, fontSize);
      for (let j = 0; j < contents.length; j++) {
        ctx.fillText(contents[j], 0, (j + 1) * fontSize + startLine);
      }

      const previewImage = canvasInput.$refs.preview;
      const dataUrl = canvas.toDataURL("image/png");
      const errorCode = "data:,";
      if (dataUrl === errorCode) {
        alert("다시 한 번 시도해주세요.");
      } else {
        previewImage.src = dataUrl;
      }
      this.isLoading = false;
    },
  },
};
</script>

<style scoped></style>
