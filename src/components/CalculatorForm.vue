<template>
  <div>
    <article>
      <v-text-field
        v-if="Object.keys(currentFormula).length > 0"
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
    <notification-expansion
      title="참고사항"
      icon="mdi-information-outline"
      :rules="currentFormula.rules"
    ></notification-expansion>
  </div>
</template>

<script>
import NotificationExpansion from "./NotificationExpansion.vue";
export default {
  components: {
    NotificationExpansion,
  },
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
