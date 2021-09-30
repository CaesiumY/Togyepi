<template>
  <article>
    <v-autocomplete
      auto-select-first
      rounded
      solo-inverted
      label="공식을 선택하세요"
      :items="formulaNames"
      color="white"
      @change="onChangeSelect"
    ></v-autocomplete>
  </article>
</template>

<script>
export default {
  props: {
    formulaNames: {
      type: Array,
      required: true,
    },
    onChangeSelect: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style scoped></style>
