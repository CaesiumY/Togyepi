<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app absolute temporary>
      <v-divider></v-divider>

      <v-list>
        <v-list-item-group v-model="selected" :color="mainColor">
          <v-list-item v-for="([icon, text], i) in items" :key="i" link>
            <v-list-item-icon>
              <v-icon>{{ icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>
                {{ text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>

      <v-divider></v-divider>
    </v-navigation-drawer>

    <v-app-bar app :color="mainColor" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-h5 font-weight-bold">토계피</v-toolbar-title>
      <v-spacer></v-spacer>
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
