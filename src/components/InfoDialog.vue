<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon>mdi-information</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          <v-icon class="mr-3">mdi-information</v-icon>
          계산 가이드
        </v-card-title>

        <v-card-text>
          <div v-for="item in this.formula" :key="item.id">
            <section class="my-4">
              <div>
                <h4 class="text-h6">
                  {{ item.name }} : {{ item.description }}
                </h4>
              </div>
              <div class="my-3">
                <p
                  class="text-body-1"
                  v-for="(param, key) in item.params"
                  :key="key"
                >
                  <strong>{{ key }}</strong> : {{ param }}
                </p>
              </div>
              <div>
                <span v-for="(rule, index) in item.rules" :key="index">
                  {{ rule }} <br />
                </span>
              </div>
            </section>
            <v-divider></v-divider>
          </div>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import formula from "../utils/calculatingFormula";
export default {
  data: () => {
    return {
      dialog: false,
      formula: formula,
    };
  },
};
</script>

<style scoped></style>
