<template>
  <v-card class="pa-5" style="box-shadow: 5px 5px 20px #00000029">
    <v-row
      no-gutters
      justify="center"
      class="pa-8"
    >
      <v-col class="line-data" cols="6"><span>CODE GHT: </span> {{ data.ght }} </v-col>
      <v-col class="line-data" cols="6"><span>MARQUE: </span> {{ data.brand }} </v-col>
      <v-col class="line-data" cols="6"><span>GRILLE DE TAILLE: </span> {{ data.size }} </v-col>
      <v-col class="line-data" cols="6"><span>LIGNE: </span> {{ data.line }} </v-col>
      <v-col class="line-data" cols="6"><span>CODE GHV: </span> {{ data.ghv }} </v-col>
      <v-col class="line-data" cols="6"><span>ZONE: </span> {{ data.zone }} </v-col>
      <v-col class="line-data" cols="6"><span>GRILE DE VARIANTE: </span> {{ data.variant }} </v-col>
      <v-col class="line-data" cols="6"><span>CANAL: </span> {{ data.canal }} </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'InformationCard',
  props: ['data']
}
</script>

<style scoped>
  span {
    font-size: 15px;
    letter-spacing: -0.3px;
    color: #716F6F;
    font-weight: bold;
  }
  .line-data {
    font-size: 15px;
    letter-spacing: -0.3px;
    color: #716F6F;
    font-weight: 300;
  }
</style>