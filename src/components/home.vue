<template>
  <v-layout column>
    <v-container fluid>
          <v-layout row wrap align-center>
            <!-- select박스 추가 -->
            <v-flex xs12 pa-5>
                <v-select
                  v-model="selected"
                  :items="calculates"
                  item-text="title"
                  item-value="id"
                  menu-props="auto"
                  label="종류 선택"
                  hide-details
                  prepend-inner-icon="arrow_drop_down_circle"
                  single-line
                  outline
                ></v-select>
            </v-flex>

            <!-- 선택 값에 따른 텍스트 에리어 추가 -->
            <v-flex sm6 md3 ma-3>
               <v-text-field
                 v-for="(calculate, i) in selected"
                 :key="calculate.id"
                 :title="calculate.title"
                 label= 'p'
                 solo
                 mask=#########
               ></v-text-field>
             </v-flex>

          </v-layout>
        </v-container>

    <!-- <v-flex xs10 offset-xs1 >
      <ul>
        <li
          class="article lighten-text"
          style="list-style-type: none;"
          v-for="(article, idx) in articles" :key="idx">
          <div v-if="article.link.indexOf('http') >= 0" class="title-font" @click="toExtRoute(article.link)"> [{{article.created}}] {{article.title}} </div>
          <div v-else class="title-font" @click="toRoute('vuejs_home')"> [{{article.created}}] {{article.title}} </div>
        </li>
      </ul>
    </v-flex> -->
  </v-layout>
</template>
<script>

export default {
  name: 'Home',
  created () {
  },
  data: () => ({
    show: false,
    isList: false,
    // articles: [
    //   {title: 'Vuejs 2 + vuetifyjs content sharing template', created: 'June 18\'', link: 'vuejs_home'},
    //   {title: 'Go + Gin + ElasticSearch - Modular rest engine', created: 'June 18\'', link: 'https://github.com/nareshganesan/services/tree/dev'}
    // ]
    calculates: [
      {id: 1, title: '1개'},
      {id: 2, title: '2개'},
      {id: 3, title: '3개'},
      {id: 4, title: '4개'}
    ],
    selected: 0
  }),
  methods: {
    toRoute (rname, rparams = {}, query = {}) {
      this.dialog = true
      this.$router.push({name: rname, params: rparams, query: query})
    }
    // toExtRoute (rname) {
    //   window.location = rname
    //   return false
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@import url('https://fonts.googleapis.com/css?family=Archivo')


.article {
  /*font-family: 'Archivo', sans-serif, Helvetica;*/
  list-style-type: none;
  font-size: 18px !important;
  font-weight: 400;
  cursor: pointer;
}

.title-font {
  /*Google fonts: Archivo*/
  font-family: 'Archivo', sans-serif, Helvetica;
  font-size: 16px !important;
  font-weight: 400;
  cursor: pointer;
  color: #616161;
  line-height: 1.8;
}

.content-font {
  /*Google fonts: Work Sans*/
}

.note-font {
  /*Google fonts: playfair display*/
}

</style>
`
