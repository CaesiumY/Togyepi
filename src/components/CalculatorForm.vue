<template>
  <div>
    <article>
      <v-text-field
        v-if="currentFormula"
        v-model="resultValue"
        label="결과 값"
        :suffix="unit"
        prepend-inner-icon="mdi-beaker-check-outline"
        outlined
        dense
        readonly
        type="text"
      ></v-text-field>

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
  </div>
</template>

<script>
export default {
  props: {
    currentFormula: {
      type: Object,
      required: true,
    },
    rules: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    unit: "g/ml",
    inputValues: [],
    resultValue: 0,
  }),
  methods: {
    initData() {
      this.inputValues = [];
      this.resultValue = 0;
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
