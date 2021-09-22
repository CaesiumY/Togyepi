<template>
  <section class="d-flex flex-column justify-center text-center ma-5">
    <article class="mt-10">
      <v-autocomplete
        v-model="selectedFormula"
        auto-select-first
        clearable
        rounded
        solo-inverted
        label="공식을 선택하세요"
        :items="formulaNames"
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
  }),
  mounted() {
    console.log(this.formula);
  },
};
</script>

<style scoped></style>
