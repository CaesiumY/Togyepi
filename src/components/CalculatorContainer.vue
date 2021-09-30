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
    <calculator-selector
      :formulaNames="formulaNames"
      :onChangeSelect="onChangeSelect"
    ></calculator-selector>
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
    <article
      class="mt-5"
      v-if="currentFormula.rules && currentFormula.rules.length > 0"
    >
      <v-expansion-panels focusable>
        <v-expansion-panel>
          <v-expansion-panel-header disable-icon-rotate>
            참고 사항
            <template v-slot:actions>
              <v-icon color="primary"> mdi-information-outline </v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="pt-4">
            <ul>
              <li
                class="text-left"
                v-for="(rule, index) in currentFormula.rules"
                :key="index"
              >
                {{ rule }}
              </li>
            </ul>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </article>
  </section>
</template>

<script>
import calculatingFormula from "../utils/calculatingFormula";
import CalculatorSelector from "./CalculatorSelector.vue";

export default {
  components: {
    CalculatorSelector,
  },
  data: () => ({
    formulaNames: Object.values(calculatingFormula).map(
      (f) => `${f.name} (${f.description})`
    ),
    currentFormula: "",
    resultValue: 0,
    unit: "g/ml",
    inputValues: [],
    rules: [],
  }),
  mounted() {
    console.log(calculatingFormula);
  },
  methods: {
    initData() {
      this.inputValues = [];
      this.resultValue = 0;
    },
    onChangeSelect(value) {
      const selectedValue = Object.values(calculatingFormula).find(
        (f) => f.name === value.split("(")[0].trim()
      );
      this.currentFormula = selectedValue;
      this.rules = selectedValue.rules;
      this.initData();
    },
    onCalculate(props) {
      if (props.length < Object.keys(this.currentFormula.params).length) return;

      this.resultValue = this.currentFormula.formula(...props);
    },
  },
  watch: {
    inputValues(value) {
      this.onCalculate(value.map((v) => parseFloat(v, 10)));
      if (isNaN(this.resultValue)) this.resultValue = 0;
    },
  },
};
</script>

<style scoped></style>
