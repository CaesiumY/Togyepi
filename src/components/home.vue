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
               <!-- 결과값 출력 -->
               <v-flex xs12 sm6>
                  <v-text-field
                    v-if="selected == 2"
                    label="계산 값"
                    box
                    readonly
                    v-model="CEC"
                  ></v-text-field>

                  <v-text-field
                    v-else-if="selected == 3"
                    label="계산 값"
                    box
                    readonly
                    v-model="Microwave"
                  ></v-text-field>

                  <v-text-field
                    v-else-if="selected == 4"
                    label="계산 값"
                    box
                    readonly
                    v-model="Organic_carbon_content_of_soil"
                  ></v-text-field>

                  <v-text-field
                    v-else-if="selected == 5"
                    label="계산 값"
                    box
                    readonly
                    v-model="Nitrogen"
                  ></v-text-field>

                  <v-text-field
                    v-else-if="selected == 6"
                    label="계산 값"
                    box
                    readonly
                    v-model="EC"
                  ></v-text-field>

                  <v-text-field
                    v-else-if="selected == 7"
                    label="계산 값"
                    box
                    readonly
                    v-model="Salinity"
                  ></v-text-field>

                  <v-text-field
                    v-else-if="selected == 8"
                    label="계산 값"
                    box
                    readonly
                    v-model="Cl_2"
                  ></v-text-field>

                  <v-text-field
                    v-else-if="selected == 9"
                    label="계산 값"
                    box
                    readonly
                    v-model="Cl_1"
                  ></v-text-field>

                  <v-text-field
                    v-else-if="selected == 10"
                    label="계산 값"
                    box
                    readonly
                    v-model="Ammonia_nitrogen_Kjeldahl"
                  ></v-text-field>

                  <v-text-field
                    v-else-if="selected == 11"
                    label="계산 값"
                    box
                    readonly
                    v-model="Nitrate_nitrogen_Kjeldahl"
                  ></v-text-field>

                  <v-text-field
                    v-else-if="selected == 12"
                    label="계산 값"
                    box
                    readonly
                    v-model="Ammonia_nitrogen_Indophenol_Blue_drysoil"
                  ></v-text-field>

                  <v-text-field
                    v-else-if="selected == 13"
                    label="계산 값"
                    box
                    readonly
                    v-model="Ammonia_nitrogen_Indophenol_Blue_wetsoil"
                  ></v-text-field>

                  <v-text-field
                    v-else-if="selected == 14"
                    label="계산 값"
                    box
                    readonly
                    v-model="Nitrate_nitrogen_Brucine_drysoil"
                  ></v-text-field>

                  <v-text-field
                    v-else-if="selected == 15"
                    label="계산 값"
                    box
                    readonly
                    v-model="Nitrate_nitrogen_Brucine_wetsoil"
                  ></v-text-field>

                  <!-- 선택 값에 따른 텍스트 에리어 추가 -->
                  <v-flex sm6 md3 ma-3>
                     <v-text-field
                       v-for="(sel, i) in NumofParams[selected-1]"
                       :key="sel.id"
                       v-model="calculateValues[i]"
                       label= "입력 값"
                       solo
                       type="number"
                     ></v-text-field>

                </v-flex>
             </v-flex>
          </v-layout>
        </v-container>
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
      {id: 2, title: 'CEC', params: 2},
      {id: 3, title: '중금속', params: 3},
      {id: 4, title: '토양의 유기탄소함량', params: 4},
      {id: 5, title: '전질소 계산', params: 5},
      {id: 6, title: 'EC계산', params: 4},
      {id: 7, title: '염농도 계산', params: 4},
      {id: 8, title: '0.02-N AgNO3 적정 계산', params: 1},
      {id: 9, title: '0.01-N AgNO3 적정 계산', params: 1},
      {id: 10, title: '암모니아태 질소(NH4+-N) 계산', params: 7},
      {id: 11, title: '질산태 질소(NO3-N) Kjeldahl법', params: 7},
      {id: 12, title: '암모니아태 질소(NH4+-N) Indophenol - Blue 비색법(건토)', params: 3},
      {id: 13, title: '암모니아태 질소(NH4+-N) Indophenol - Blue 비색법(습토)', params: 5},
      {id: 14, title: '질산태 질소(NO3--N) Brucine 비색법(건토)', params: 3},
      {id: 15, title: '질산태 질소(NO3--N) Brucine 비색법(습토)', params: 5}
    ],
    selected: 0,
    calculateValues: [],
    calcFunctions: ['CEC', 'Microwave', 'Organic_carbon_content_of_soil', 'Nitrogen'],
    NumofParams: [0, 2, 3, 4, 5, 4, 4, 1, 1, 7, 7, 3, 5, 3, 5]
  }),

  methods: {
    toRoute (rname, rparams = {}, query = {}) {
      this.dialog = true
      this.$router.push({name: rname, params: rparams, query: query})
    }
  },
  computed: {
    Organic_carbon_content_of_soil: function () { // 4개
      var C = (this.calculateValues[0] - this.calculateValues[1]) * this.calculateValues[2] * (12 / 4000) * (100 / this.calculateValues[3])
      return C * 1.724
    },
    Microwave: function () { // 3개
      return (this.calculateValues[0] - this.calculateValues[1]) * 100 / this.calculateValues[2]
    },
    CEC: function () { // 2개
      return (this.calculateValues[0] - this.calculateValues[1]) * 5
    },
    Nitrogen: function () { // 5개
      return (this.calculateValues[0] - this.calculateValues[1]) * this.calculateValues[2] * this.calculateValues[3] * 14 * 1 / 1000 * 1 / this.calculateValues[4] * 100
    },
    EC: function () { // 4개
      return (this.calculateValues[0] / this.calculateValues[1]) * this.calculateValues[2] * this.calculateValues[3]
    },
    Salinity: function () { // 4개
      return (this.calculateValues[0] / this.calculateValues[1]) * this.calculateValues[2] * this.calculateValues[3] * 0.064
    },
    Cl_2: function () { // 1개
      return 5 * 0.04 * 0.07091 * 10000 * this.calculateValues[0]
    },
    Cl_1: function () { // 1개
      return 5 * 0.04 * 0.03545 * 10000 * this.calculateValues[0]
    },
    Ammonia_nitrogen_Kjeldahl: function () { // 7개
      return (this.calculateValues[0] - this.calculateValues[1]) * this.calculateValues[2] * this.calculateValues[3] * 14 * (1 / 1000) * (this.calculateValues[4] / this.calculateValues[5]) * (1 / this.calculateValues[6]) * 1000000
    },
    Nitrate_nitrogen_Kjeldahl: function () { // 7개
      return (this.calculateValues[0] - this.calculateValues[1]) * this.calculateValues[2] * this.calculateValues[3] * 14 * (1 / 1000) * (this.calculateValues[4] / this.calculateValues[5]) * (1 / this.calculateValues[6]) * 1000000
    },
    Ammonia_nitrogen_Indophenol_Blue_drysoil: function () { // 3개
      return this.calculateValues[0] * (50 / 5) * this.calculateValues[1] * this.calculateValues[2]
    },
    Ammonia_nitrogen_Indophenol_Blue_wetsoil: function () { // 5개
      return this.calculateValues[0] * this.calculateValues[1] * this.calculateValues[2] * (50 + (this.calculateValues[3] - this.calculateValues[4])) / this.calculateValues[3]
    },
    Nitrate_nitrogen_Brucine_drysoil: function () { // 3개
      return this.calculateValues[0] * (50 / 5) * this.calculateValues[1] * this.calculateValues[2]
    },
    Nitrate_nitrogen_Brucine_wetsoil: function () { // 5개
      return this.calculateValues[0] * this.calculateValues[1] * this.calculateValues[2] * (50 + (this.calculateValues[3] - this.calculateValues[4])) / this.calculateValues[3]
    }
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
