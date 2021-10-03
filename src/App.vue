<template>
  <v-app>
    <Header></Header>
    <v-main>
      <router-view />
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
  },
};
</script>
