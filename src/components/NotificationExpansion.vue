<template>
  <article class="mt-5" v-if="rules && rules.length > 0">
    <v-expansion-panels focusable>
      <v-expansion-panel>
        <v-expansion-panel-header disable-icon-rotate>
          {{ title }}
          <template v-slot:actions>
            <v-icon color="primary"> {{ icon }} </v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content class="pt-4">
          <ul>
            <li class="text-left" v-for="(rule, index) in rules" :key="index">
              {{ rule }}
            </li>
          </ul>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </article>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
    },
    rules: {
      type: Array,
    },
  },
};
</script>

<style scoped></style>
