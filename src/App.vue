<template>
  <v-app>
    <Header></Header>
    <v-main>
      <router-view class="app ma-auto" />
    </v-main>
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  name: "App",
  components: {
    Header,
  },
  metaInfo: {
    title: "토계피",
    titleTemplate: "%s | 토질 계산 피료해",
    meta: [
      {
        name: "description",
        content: "토질 계산 피료해? 토질 계산을 도와주는 토계피입니다.",
      },
    ],
  },
};
</script>

<style scoped>
.app {
  position: relative;
  max-width: 720px;
}
</style>
