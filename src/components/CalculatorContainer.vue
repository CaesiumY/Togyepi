<template>
  <section class="d-flex flex-column justify-center text-center ma-5">
    <calculator-selector
      :formulaNames="formulaNames"
      :onChangeSelect="onChangeSelect"
    ></calculator-selector>
    <calculator-form
      :currentFormula="currentFormula"
      :rules="rules"
      ref="form"
    ></calculator-form>
  </section>
</template>

<script>
import calculatingFormula from "../utils/calculatingFormula";
import CalculatorSelector from "./CalculatorSelector.vue";
import CalculatorForm from "./CalculatorForm.vue";

export default {
  components: {
    CalculatorSelector,
    CalculatorForm,
  },
  data: () => ({
    formulaNames: Object.values(calculatingFormula).map(
      (f) => `${f.name} (${f.description})`
    ),
    currentFormula: {},
    rules: [],
  }),
  mounted() {
    console.log(calculatingFormula);
  },
  methods: {
    onChangeSelect(value) {
      const selectedValue = Object.values(calculatingFormula).find(
        (f) => f.name === value.split("(")[0].trim()
      );
      this.currentFormula = selectedValue;
      this.rules = selectedValue.rules;
      this.$refs.form.initData();
    },
  },
};
</script>

<style scoped></style>
