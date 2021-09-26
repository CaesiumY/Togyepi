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
      ></v-autocomplete>
    </article>
  </section>
</template>

<script>
import calculatingFormula from "../utils/calculatingFormula";
export default {
  data: () => ({
    formula: calculatingFormula,
    formulaNames: Object.keys(calculatingFormula).map(
      (f) => calculatingFormula[f].name
    ),
    selectedFormula: "",
    resultValue: 0,
    unit: "g/ml",
  }),
  mounted() {
    console.log(this.formula);
  },
};
</script>

<style scoped></style>
