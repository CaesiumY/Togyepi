<template>
  <v-app>
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
        <v-img src="./assets/logo_only.png" width="60%"></v-img>
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
        </v-list-item-group>
      </v-list>

      <v-divider></v-divider>
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

      <div class="text-center">
        <v-dialog v-model="dialog" width="500">
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon>mdi-information</v-icon>
            </v-btn>
          </template>

          <v-card>
            <v-card-title class="text-h5 grey lighten-2">
              <v-icon class="mr-3">mdi-information</v-icon>
              계산 가이드
            </v-card-title>

            <v-card-text class="pa-4">
              CEC // 1N- Cacl2 치환침출법 계산 <br />
              (<strong>a</strong> = 시료 적정에 소요된 황산 ml) <br />
              (<strong>b</strong> = Blank 적정에 소요된 황산 ml) <br />
              (황산 적정용액 규정농도 : 0.05) <br />
              (토양시료 무게 : 5g) <br />
              (단위 환산인자 cmol/kg(=me/100g) : 100g) <br />

              <v-divider></v-divider>

              Microwave // 중금속 <br />
              (<strong>T</strong> = 시료측정치 값) <br />
              (<strong>B</strong> = Blank 측정치 값) <br />
              (100 = 100ml mess up량) <br />
              (<strong>S</strong> = 시료양) <br />

              <v-divider></v-divider>

              Organic Carbon content of Soil // 토양의 유기탄소함량 <br />
              (<strong>B</strong> = Blank 적정치 0.2-N 황산제1철암모니움요액
              소요량) <br />
              (<strong>T</strong> = 시료 적정치 0.2-N 황산제1철암모니움요액
              소요량) <br />
              (<strong>F</strong> = 적정액의 농도보정계수) <br />
              (<strong>W</strong> = 토양무게) <br />

              <v-divider></v-divider>

              Nitrogen // 전질소 계산 <br />
              (<strong>T</strong> = 황산표준용액 적정에 쇼요된 ml수) <br />
              (<strong>B</strong> = Blank 의 환산표준액 적정에 소요된 ml수)
              <br />
              (<strong>F</strong> = 황산표준액의 보정치(factor)) <br />
              (<strong>N</strong> = 황산표준액의 Normality) <br />
              (<strong>W</strong> = 토양시료의 무게(g)) <br />

              <v-divider></v-divider>

              EC 계산 <br />
              (<strong>ec</strong> = 삼투압의 원리) <br />
              (<strong>water</strong> = 증류수(ml)) <br />
              (<strong>weight</strong> = 토양무게) <br />
              (<strong>value</strong> = 측정치) <br />
              (<strong>factor</strong> = 온도보정계수) <br />

              <v-divider></v-divider>

              Salinity // 염농도 계산 <br />
              (<strong>salinity</strong> = 삼투압의 원리) <br />
              (<strong>water</strong> = 증류수(ml)) <br />
              (<strong>weight</strong> = 토양무게) <br />
              (<strong>value</strong> = 측정치) <br />
              (<strong>factor</strong> = 온도보정계수) <br />

              <v-divider></v-divider>

              Cl_2 // 0.02-N AgNO3 적정 계산 <br />
              (<strong>cl_2 (ppm)</strong> = 0.02-N AgNO3 일때 염소) <br />
              (<strong>value</strong> = 측정치) <br />

              <v-divider></v-divider>

              Cl_1 // 0.01-N AgNO3 적정 계산 <br />
              (<strong>cl_2 (ppm)</strong> = 0.01-N AgNO3 일때 염소) <br />
              (<strong>value</strong> = 측정치) <br />

              <v-divider></v-divider>

              Ammonia_nitrogen_Kjeldahl // 암모니아태 질소(NH4+-N) Kjeldahl법
              <br />
              (<strong>T</strong> = 황산표준용액의 ml수) <br />
              (<strong>B</strong> = Blank의 황산표준액의 ml수) <br />
              (<strong>F</strong> = 황산표준액의 보정치(factor)) <br />
              (<strong>N</strong> = 황산표준액의 Normality) <br />
              (<strong>W</strong> = 토양시료의 무게(g)) <br />
              (<strong>leachate</strong> = 침출액량) <br />
              (<strong>sample</strong> = 취한시료액량) <br />

              <v-divider></v-divider>

              Nitrate_nitrogen_Kjeldahl // 질산태 질소(NO3-N) Kjeldahl법 <br />
              (<strong>T</strong> = 황산표준용액의 ml수) <br />
              (<strong>B</strong> = Blank의 황산표준액의 ml수) <br />
              (<strong>F</strong> = 황산표준액의 보정치(factor)) <br />
              (<strong>N</strong> = 황산표준액의 Normality) <br />
              (<strong>W</strong> = 토양시료의 무게(g)) <br />
              (<strong>leachate</strong> = 침출액량) <br />
              (<strong>sample</strong> = 취한시료액량) <br />

              <v-divider></v-divider>

              Ammonia_nitrogen_Indophenol_Blue_drysoil // 암모니아태
              질소(NH4+-N) Indophenol - Blue 비색법(건토) <br />
              (<strong>a</strong> = 기울기) <br />
              (<strong>Dilution_factor</strong> = 희석배수) <br />
              (<strong>Absorbance</strong> = 흡광도) <br />

              <v-divider></v-divider>

              Ammonia_nitrogen_Indophenol_Blue_wetsoil // 암모니아태
              질소(NH4+-N) Indophenol - Blue 비색법(습토) <br />
              (<strong>a</strong> = 기울기) <br />
              (<strong>Dilution_factor</strong> = 희석배수) <br />
              (<strong>Absorbance</strong> = 흡광도) <br />
              (<strong>wetsoil</strong> = 습토) <br />
              (<strong>drysoil</strong> = 건토) <br />

              <v-divider></v-divider>

              Nitrate_nitrogen_Brucine_drysoil // 질산태 질소(NO3--N) Brucine
              비색법(건토) <br />
              (<strong>a</strong> = 기울기) <br />
              (<strong>Dilution_factor</strong> = 희석배수) <br />
              (<strong>Absorbance</strong> = 흡광도) <br />

              <v-divider></v-divider>

              Nitrate_nitrogen_Brucine_wetsoil // 질산태 질소(NO3--N) Brucine
              비색법(건토) <br />
              (<strong>a</strong> = 기울기) <br />
              (<strong>Dilution_factor</strong> = 희석배수) <br />
              (<strong>Absorbance</strong> = 흡광도) <br />
              (<strong>wetsoil</strong> = 습토) <br />
              (<strong>drysoil</strong> = 건토) <br />
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="dialog = false">OK</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { mainColor } from "@/constants";

export default {
  name: "App",

  data: () => ({
    mainColor: mainColor,
    drawer: false,
    items: [
      ["mdi-calculator", "계산", ""],
      ["mdi-camera", "사진", "photo"],
      ["mdi-notebook", "플랜", "plan"],
    ],
    selected: 0,
    dialog: false,
  }),

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
