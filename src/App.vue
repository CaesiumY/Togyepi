<template>
  <v-app
    id="inspire"
    style="background-color: #ffffff !important;"
  >
  <!-- 앱셸 모델을 위한 drawer 추가 -->
    <v-navigation-drawer
    temporary
    app
    floating
    v-model="drawer"
    >
    <v-container grid-list-sm>
      <v-layout row justify-center align-center>
        <v-flex xs12>
          <v-card flat>
            <v-card-title flat>
              <v-container grid-list-sm>
                <v-layout row wrap>
                  <v-flex xs12
                    align-center justify-center text-xs-center
                  >
                    <button>
                      <v-avatar
                        @click.stop="toRoute('home')"
                        tile="tile"
                        size="125"
                      >
                        <img src="./assets/logo_only.png" alt="avatar">
                      </v-avatar>
                    </button>
                  </v-flex>
                  <v-flex xs12
                    align-center justify-center text-xs-center
                    headline
                  >
                        <button class="nanum-bold" @click.stop="toRoute('home')">
                          토 계 피
                        </button>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-divider></v-divider>
    <v-list>
    <template  >
      <v-list-tile v-for="(item, i) in items" :key="i" @click="" >
        <v-list-tile-action @click.stop="toRoute(item.link)">
          <v-icon large color="teal lighten-3">{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content @click.stop="toRoute(item.link)">
          <v-list-tile-title style="font-size: 17.5px">
            {{ item.text }}
          </v-list-tile-title>
        </v-list-tile-content>
        <!-- Add 버튼 타일 -->
        <!-- <v-list-tile-action v-if="item.add">
            <v-tooltip right>
              <v-icon dark color="primary" @click.stop="toRoute(item.add)" slot="activator">add</v-icon>
               <span>{{item.ttip}}</span>
            </v-tooltip>
        </v-list-tile-action> -->

      </v-list-tile>
    </template>
    <v-spacer></v-spacer>
    <v-divider></v-divider>
    <v-list-tile >
      <v-list-tile-action>
        <v-icon>copyright</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>
          <v-tooltip bottom>
            <a slot="activator" href="https://github.com/CaesiumY/Togyepi" target="_blank">
              Copyright by CS production<!-- {{ year }} --></a>
            <span>클릭시 github 페이지로 연결됩니다</span>
          </v-tooltip>
        </v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
    </v-list>
  </v-navigation-drawer>


<!-- 맨 위 툴바 생성  -->
  <v-toolbar color="teal lighten-3" app dark >
    <!-- 네비게이션 drawer 아이콘으로 온오프 -->
    <v-toolbar-side-icon dark @click.stop="drawer = !drawer" ></v-toolbar-side-icon>
    <v-toolbar-title class="mr-5 align-center" >
      <!-- 툴바 터치시 홈으로 -->
      <button class="nanum-bold" @click.stop="toRoute('home')"> 토질 계산 피료해? </button>
    </v-toolbar-title>
    <v-spacer></v-spacer>

    <!-- 계산 가이드 다이얼로그 아이콘 -->
      <v-dialog v-model="dialog" width="600px">
          <v-btn icon slot="activator">
            <v-tooltip bottom>
              <v-icon slot="activator">info</v-icon>
              <span>계산 가이드</span>
            </v-tooltip>
          </v-btn>
        <v-card>
          <v-card-title class="headline grey lighten-2">
            <span class="headline">
              <v-icon left>find_in_page</v-icon>
              계산 가이드</span>
          </v-card-title>

          <!-- 다이얼로그 내용 -->
          <v-card-text>
            CEC // 1N- Cacl2 치환침출법 계산 <br />
            (<strong>a</strong> = 시료 적정에 소요된 황산 ml) <br />
            (<strong>b</strong> = Blank 적정에 소요된 황산 ml) <br />
            (황산 적정용액 규정농도 : 0.05) <br />
            (토양시료 무게 : 5g) <br />
            (단위 환산인자 cmol/kg(=me/100g) : 100g) <br />
          </v-card-text>

          <v-divider></v-divider>
          <v-card-text>
            Microwave // 중금속 <br />
            (<strong>T</strong> = 시료측정치 값) <br />
            (<strong>B</strong> = Blank 측정치 값) <br />
            (100 = 100ml mess up량) <br />
            (<strong>S</strong> = 시료양) <br />
          </v-card-text>

          <v-divider></v-divider>
          <v-card-text>
            Organic Carbon content of Soil // 토양의 유기탄소함량 <br />
            (<strong>B</strong> = Blank 적정치 0.2-N 황산제1철암모니움요액 소요량) <br />
            (<strong>T</strong> = 시료 적정치 0.2-N 황산제1철암모니움요액 소요량) <br />
            (<strong>F</strong> = 적정액의 농도보정계수) <br />
            (<strong>W</strong> = 토양무게) <br />
          </v-card-text>

          <v-divider></v-divider>
          <v-card-text>
            Nitrogen // 전질소 계산 <br />
            (<strong>T</strong> = 황산표준용액 적정에 쇼요된 ml수) <br />
            (<strong>B</strong> = Blank 의 환산표준액 적정에 소요된 ml수) <br />
            (<strong>F</strong> = 황산표준액의 보정치(factor)) <br />
            (<strong>N</strong> = 황산표준액의 Normality) <br />
            (<strong>W</strong> = 토양시료의 무게(g)) <br />
          </v-card-text>

          <v-divider></v-divider>
          <v-card-text>
            EC 계산 <br />
            (<strong>ec</strong> = 삼투압의 원리) <br />
            (<strong>water</strong> = 증류수(ml)) <br />
            (<strong>weight</strong> = 토양무게) <br />
            (<strong>value</strong> = 측정치) <br />
            (<strong>factor</strong> = 온도보정계수) <br />
          </v-card-text>

          <v-divider></v-divider>
          <v-card-text>
            Salinity // 염농도 계산 <br />
            (<strong>salinity</strong> = 삼투압의 원리) <br />
            (<strong>water</strong> = 증류수(ml)) <br />
            (<strong>weight</strong> = 토양무게) <br />
            (<strong>value</strong> = 측정치) <br />
            (<strong>factor</strong> = 온도보정계수) <br />
          </v-card-text>

          <v-divider></v-divider>
          <v-card-text>
            Cl_2 // 0.02-N AgNO3 적정 계산 <br />
            (<strong>cl_2 (ppm)</strong> = 0.02-N AgNO3 일때 염소) <br />
            (<strong>value</strong> = 측정치) <br />
          </v-card-text>

          <v-divider></v-divider>
          <v-card-text>
            Cl_1 // 0.01-N AgNO3 적정 계산 <br />
            (<strong>cl_2 (ppm)</strong> = 0.01-N AgNO3 일때 염소) <br />
            (<strong>value</strong> = 측정치) <br />
          </v-card-text>

          <v-divider></v-divider>
          <v-card-text>
            Ammonia_nitrogen_Kjeldahl // 암모니아태 질소(NH4+-N) Kjeldahl법 <br />
            (<strong>T</strong> = 황산표준용액의 ml수) <br />
            (<strong>B</strong> = Blank의 황산표준액의 ml수) <br />
            (<strong>F</strong> = 황산표준액의 보정치(factor)) <br />
            (<strong>N</strong> = 황산표준액의 Normality) <br />
            (<strong>W</strong> = 토양시료의 무게(g)) <br />
            (<strong>leachate</strong> = 침출액량) <br />
            (<strong>sample</strong> = 취한시료액량) <br />
          </v-card-text>

          <v-divider></v-divider>
          <v-card-text>
            Nitrate_nitrogen_Kjeldahl // 질산태 질소(NO3-N) Kjeldahl법 <br />
            (<strong>T</strong> = 황산표준용액의 ml수) <br />
            (<strong>B</strong> = Blank의 황산표준액의 ml수) <br />
            (<strong>F</strong> = 황산표준액의 보정치(factor)) <br />
            (<strong>N</strong> = 황산표준액의 Normality) <br />
            (<strong>W</strong> = 토양시료의 무게(g)) <br />
            (<strong>leachate</strong> = 침출액량) <br />
            (<strong>sample</strong> = 취한시료액량) <br />
          </v-card-text>

          <v-divider></v-divider>
          <v-card-text>
            Ammonia_nitrogen_Indophenol_Blue_drysoil // 암모니아태 질소(NH4+-N) Indophenol - Blue 비색법(건토) <br />
            (<strong>a</strong> = 기울기) <br />
            (<strong>Dilution_factor</strong> = 희석배수) <br />
            (<strong>Absorbance</strong> = 흡광도) <br />
          </v-card-text>

          <v-divider></v-divider>
          <v-card-text>
            Ammonia_nitrogen_Indophenol_Blue_wetsoil // 암모니아태 질소(NH4+-N) Indophenol - Blue 비색법(습토) <br />
            (<strong>a</strong> = 기울기) <br />
            (<strong>Dilution_factor</strong> = 희석배수) <br />
            (<strong>Absorbance</strong> = 흡광도) <br />
            (<strong>wetsoil</strong> = 습토) <br />
            (<strong>drysoil</strong> = 건토) <br />
          </v-card-text>

          <v-divider></v-divider>
          <v-card-text>
            Nitrate_nitrogen_Brucine_drysoil // 질산태 질소(NO3--N) Brucine 비색법(건토) <br />
            (<strong>a</strong> = 기울기) <br />
            (<strong>Dilution_factor</strong> = 희석배수) <br />
            (<strong>Absorbance</strong> = 흡광도) <br />
          </v-card-text>

          <v-divider></v-divider>
          <v-card-text>
            Nitrate_nitrogen_Brucine_wetsoil // 질산태 질소(NO3--N) Brucine 비색법(건토) <br />
            (<strong>a</strong> = 기울기) <br />
            (<strong>Dilution_factor</strong> = 희석배수) <br />
            (<strong>Absorbance</strong> = 흡광도) <br />
            (<strong>wetsoil</strong> = 습토) <br />
            (<strong>drysoil</strong> = 건토) <br />
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" flat="flat" @click="dialog = false">확인</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
  </v-toolbar>

  <v-content class="px-0">
    <v-container fluid fill-height class="px-0">
      <v-layout row wrap>
        <v-flex xs12>
          <router-view>
            <!-- 라우터의 템플릿을 표시 -->
          </router-view>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>

  </v-app>
</template>


<script>
  export default {
    created () {
      this.$store.dispatch('checkAuth')
    },
    data: () => ({
      fav: true,
      menu: true,
      message: false,
      hints: true,
      fixed: true,
      drawer: false,
      theme: false,
      isList: false,
      dialog: false
    }),
    props: {
      source: String
    },
    computed: {
      items () {
        let menu = [
          { icon: 'dashboard', text: '계산', link: 'home' },
          { icon: 'camera_enhance', text: '사진', link: 'vuejs_capture' },
          { icon: 'calendar_today', text: '플랜', link: 'calendar' }
        ]
        return menu
      }
      // year () {
      //   return new Date().getFullYear()
      // }
    },
    methods: {
      toRoute (rname, rparams = {}, query = {}) {
        // this.dialog = true
        this.$router.push({name: rname, params: rparams, query: query})
      }
      // 레이아웃 변경 버튼 비활성화
      // listView () {
      //   this.isList = !this.isList
      //   var eventName = 'emitListView'
      //   window.bus.$emit(eventName, {
      //     isList: this.isList
      //   })
      // }
    }
  }
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Nanum+Gothic');

div {
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: 400;
}

.nanum-bold {
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: bold;
}

.article-content {
  font-family: 'Nanum Gothic', sans-serif;
  font-size: 21px !important;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.80px;
  line-height: 35px;
}
.markdown {
  box-sizing: border-box;
  margin: 15px 0px;
  outline: none;
  font-family: inherit;
  font-size: 18px;
  white-space: normal;
  word-wrap: break-word;
}

.markdown code {
  width: 100% !important;
  padding: 15px;
  /*background: #272822 !important; // monokai */
  /*background: #f8f8f8 !important; // github */
  background: #23241f !important; /* monokai-sublime */
}

.code {
  width: 100% !important;
  padding: 15px;
  /*background: #272822 !important; // monokai */
  /*background: #f8f8f8 !important; // github */
  background: #23241f !important; /* monokai-sublime */
}

.v-content {
  padding: 56px 0 0 0 !important;
}
</style>
