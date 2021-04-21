<template>
  <v-card
    style="box-shadow: 5px 5px 20px #00000029;"
    :disabled="loading"
  >
    <v-row class="pa-0">
      <v-col
        cols="8" 
        class="pa-0 pl-10 pb-5"
      >
        <v-card-title class="title-card">{{ title }}</v-card-title>
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title class="headline mb-0 value-card">
              {{ value }}
            </v-list-item-title>
            <v-list-item-subtitle :style="{ color: percentColor, fontWeight: 'bold' }">
              <v-icon :color="percentColor">{{ iconPercent }}</v-icon>
              {{ percent }}%
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-col>
      <v-col
        cols="4"
        align-self="center"
        class="text-center"
      >
        <v-icon
          size="72"
          color="primary"
        >
          {{ icon }}
        </v-icon>
      </v-col>
    </v-row>
    <v-progress-circular
      v-if="loading"
      indeterminate
      size="64"
      color="primary"
      style="position: absolute; margin: auto; top: 0; left: 0; right: 0; bottom: 0"
    ></v-progress-circular>
  </v-card>
</template>

<script>
export default {
  name: 'DataBoardCard',
  props: ['title', 'value', 'percent', 'icon', 'loading'],
  computed: {
    iconPercent() {
      return Number(this.percent.replace(',', '.')) < 0 ? 'mdi-arrow-down' : 'mdi-arrow-up'
    },
    percentColor() {
      return Number(this.percent.replace(',', '.')) < 0 ? 'red' : 'green'
    }
  }
}
</script>

<style scoped>
  .title-card {
    font-weight: bold;
    color: grey;
    font-size: 23px;
    text-transform: uppercase;
  }

  .value-card {
    font-weight: lighter;
    font-size: 35px!important;
  }
</style>