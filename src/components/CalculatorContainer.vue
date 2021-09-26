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
      <div v-for="(param, id) in currentFormula.params" :key="id">
        {{ param }}
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
  }),
  computed: {},
  mounted() {
    console.log(calculatingFormula);
  },
  methods: {
    onChangeSelect() {
      const selectedValue = Object.values(calculatingFormula).find(
        (f) => f.name === this.selectedFormula
      );
      this.currentFormula = selectedValue;
    },
  },
};
</script>

<style scoped></style>
