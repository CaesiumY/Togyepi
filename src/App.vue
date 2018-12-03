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
                        size="75"
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
                          토. 계. 피.
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
  <v-toolbar color="teal lighten-3" app fixed dark >
    <!-- 네비게이션 drawer 아이콘으로 온오프 -->
    <v-toolbar-side-icon dark @click.stop="drawer = !drawer" ></v-toolbar-side-icon>
    <v-toolbar-title class="mr-5 align-center" >
      <!-- <v-list-tile @click="">
        <span @click.stop="toRoute('home')"> InsightStream.io </span>
      </v-list-tile> -->
      <!-- 툴바 터치시 홈으로 -->
      <button class="nanum-bold" @click.stop="toRoute('home')"> 토계피 </button>
    </v-toolbar-title>

    <!-- 검색창 -->
    <v-layout row justify-center>
      <!-- <v-flex xs12 sm10 style="max-width: 750px">
        <v-text-field
          placeholder="Search..."
          single-line
          append-icon="search"
          :append-icon-cb="() => {}"
          dark
          hide-details
        ></v-text-field>
      </v-flex> -->
    </v-layout>

    <!-- 레이아웃 변경버튼 -->
    <!-- <v-btn dark icon v-if="isList" @click.stop="listView()">
      <v-icon>apps</v-icon>
    </v-btn>
    <v-btn dark icon v-else @click.stop="listView()">
      <v-icon>view_list</v-icon>
    </v-btn> -->


    <!-- <v-tooltip bottom>
      <v-btn
        slot="activator"
        right
        icon
        dark
        @click.stop="vm.$forceUpdate();"
        >
        <v-icon>cached</v-icon>
      </v-btn>
      <span>새로고침</span>
    </v-tooltip bottom> -->
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
      isList: false
    }),
    props: {
      source: String
    },
    computed: {
      items () {
        let menu = [
          { icon: 'dashboard', text: '계산', link: 'home', add: 'vuejs_create_article', ttip: 'Add Article' },
          { icon: 'camera_enhance', text: '사진', link: 'vuejs_capture' },
          { icon: 'calendar_today', text: '플랜', link: 'calendar' }
        ]
        return menu
      },
      year () {
        return new Date().getFullYear()
      }
    },
    methods: {
      toRoute (rname, rparams = {}, query = {}) {
        this.dialog = true
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
