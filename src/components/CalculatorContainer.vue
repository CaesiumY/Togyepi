<template>
  <div>calc container</div>
</template>

<script>
import calculatingFormula from "../utils/calculatingFormula";
export default {
  data: () => ({
    formula: calculatingFormula,
    formulaNames: Object.keys(calculatingFormula).map(
      (f) => calculatingFormula[f].name
    ),
  }),
  mounted() {
    console.log(this.formula);
  },
};
</script>

<style scoped></style>
