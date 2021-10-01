<template>
  <div>
    <v-navigation-drawer v-model="drawer" app absolute temporary width="300">
      <router-link
        to="/"
        class="
          d-flex
          flex-column
          justify-center
          align-center
          my-7
          text-decoration-none
        "
      >
        <v-img
          lazy-src="@/assets/logo_only.png"
          src="@/assets/logo_only.png"
          width="60%"
        ></v-img>
        <h2 class="mt-3 text--primary">토 계 피</h2>
      </router-link>

      <v-divider></v-divider>

      <v-list>
        <v-list-item-group v-model="selected" :color="mainColor">
          <v-list-item
            v-for="([icon, text, route], i) in items"
            :key="i"
            link
            @click="pushRouterLink(route)"
          >
            <v-list-item-icon>
              <v-icon>{{ icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="text-h6">
                {{ text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>

          <a
            class="text-decoration-none"
            href="https://github.com/CaesiumY/Togyepi"
            target="__blank"
          >
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-github</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="text-h6">깃허브</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </a>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app :color="mainColor" dark>
      <v-app-bar-nav-icon class="text-h5" @click="drawer = !drawer">
      </v-app-bar-nav-icon>

      <v-toolbar-title
        class="text-h5 font-weight-bold"
        @click="pushRouterLink('')"
        style="cursor: pointer"
      >
        토질 계산 피료해?
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <info-dialog></info-dialog>
    </v-app-bar>
  </div>
</template>

<script>
import { mainColor } from "@/constants";
import InfoDialog from "./InfoDialog.vue";

export default {
  components: {
    InfoDialog,
  },
  data: () => {
    return {
      mainColor: mainColor,
      drawer: false,
      items: [
        ["mdi-calculator", "계산", ""],
        ["mdi-camera", "사진", "canvas"],
        ["mdi-notebook", "플랜", "plan"],
      ],
      selected: 0,
    };
  },

  methods: {
    pushRouterLink(route) {
      if (this.$route.path.slice(1) === route) return;

      this.$router.push(`/${route}`);
      this.setSelectedPathIndex();
    },
    setSelectedPathIndex() {
      const path = this.$route.path.slice(1);
      const pathIndex = this.items.findIndex((v) => v[2] === path);

      this.selected = pathIndex;
    },
  },

  mounted() {
    this.setSelectedPathIndex();
  },
};
</script>

<style scoped></style>
