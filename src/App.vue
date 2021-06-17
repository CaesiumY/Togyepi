<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app absolute temporary width="300">
      <a class="d-flex flex-column justify-center align-center my-7">
        <v-img src="./assets/logo_only.png" width="60%"></v-img>
        <h2 class="mt-3 text--primary">토 계 피</h2>
      </a>

      <v-divider></v-divider>

      <v-list>
        <v-list-item-group v-model="selected" :color="mainColor">
          <v-list-item v-for="([icon, text], i) in items" :key="i" link>
            <v-list-item-icon>
              <v-icon>{{ icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="text-h6">
                {{ text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>

      <v-divider></v-divider>
    </v-navigation-drawer>

    <v-app-bar app :color="mainColor" dark>
      <v-app-bar-nav-icon class="text-h5" @click="drawer = !drawer">
      </v-app-bar-nav-icon>
      <v-toolbar-title class="text-h5 font-weight-bold"
        >토질 계산 피료해?
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-information</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { mainColor } from "./constants";

export default {
  name: "App",

  data: () => ({
    mainColor: mainColor,
    drawer: false,
    items: [
      ["mdi-calculator", "계산"],
      ["mdi-camera", "사진"],
      ["mdi-notebook", "플랜"],
    ],
    selected: 0,
  }),
};
</script>
