<template>
  <section class="d-flex flex-column justify-center text-center ma-5">
    <article class="mt-10">
      <v-text-field
        v-model="resultValue"
        label="결과 값"
        :suffix="unit"
        prepend-inner-icon="mdi-beaker-check-outline"
        outlined
        dense
        readonly
        type="text"
      ></v-text-field>
    </article>
    <article>
      <v-autocomplete
        v-model="selectedFormula"
        auto-select-first
        clearable
        rounded
        solo-inverted
        label="공식을 선택하세요"
        :items="formulaNames"
        color="white"
        @change="onChangeSelect"
      ></v-autocomplete>
    </article>
    <article>
      <div v-for="(param, key, index) in currentFormula.params" :key="key">
        <v-text-field
          v-model="inputValues[index]"
          :label="param"
          :placeholder="key"
          type="number"
          prepend-icon="mdi-beaker-plus-outline"
          :suffix="unit"
          clearable
        ></v-text-field>
      </div>
    </article>
  </section>
</template>

<script>
import calculatingFormula from "../utils/calculatingFormula";
export default {
  data: () => ({
    formulaNames: Object.keys(calculatingFormula).map(
      (f) => calculatingFormula[f].name
    ),
    selectedFormula: "",
    currentFormula: "",
    resultValue: 0,
    unit: "g/ml",
    inputValues: [],
  }),
  computed: {},
  mounted() {
    console.log(calculatingFormula);
  },
  methods: {
    initData() {
      this.inputValues = [];
      this.resultValue = 0;
    },
    onChangeSelect() {
      const selectedValue = Object.values(calculatingFormula).find(
        (f) => f.name === this.selectedFormula
      );
      this.currentFormula = selectedValue;
      this.initData();
    },
    onCalculate(props) {
      if (props.length < Object.keys(this.currentFormula.params).length) return;

      this.resultValue = this.currentFormula.formula(...props);
    },
  },
  watch: {
    inputValues(value) {
      this.onCalculate(value.map((v) => parseInt(v, 10)));
      if (isNaN(this.resultValue)) this.resultValue = 0;
    },
  },
};
</script>

<style scoped></style>
