<template>
  <v-card
    class="pa-5 pt-0 text-center"
    :disabled="loading"
    style="box-shadow: 5px 5px 20px #00000029;"
    height="100%"
  >
    <v-card-title class="title-card">Avancement de votre saisie</v-card-title>
    <v-progress-circular
      :rotate="-90"
      :size="300"
      :width="40"
      :value="value"
      color="primary"
      style="position: absolute; margin: auto; top: 0; left: 0; right: 0; bottom: 0"
    >
      {{ value }}%
    </v-progress-circular>
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
  name: 'ProgressChartCard',
  props: ['loading', 'value']

}
</script>

<style>
  .title-card {
    font-weight: bold;
    color: grey;
    font-size: 23px;
    text-transform: uppercase;
  }

</style>