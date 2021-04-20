<template>
  <v-dialog
    v-model="open"
    width="450"
    hide-overlay
  >
    <v-overlay
      :value="open"
      color="transparent"
      @click.native="$emit('close')"
    />
    <v-card
      align="center"
      style="border-radius: 21px; box-shadow: 0px 3px 6px #00000029; z-index: 6"
      class="pb-3"
    >
      <v-card-title class="title-info">
        à propos
        <v-spacer />
        <v-icon @click="$emit('close')">mdi-close-circle-outline</v-icon>
      </v-card-title>
      <v-divider />
      <v-img
        width="300px"
        :src="require('@/assets/logo.png')"
      />
      <br>
      <br>
      <span class="text-info">Version XXX <br> 10.17 - 27/05/2020 17:02</span>
      <br>
      <br>
      <v-img
        width="150px"
        :src="require('@/assets/logo-sei.png')"
      />
      <br>
      <span class="text-info">SEI - Groupe LKS © Copyright 2020 <br> Tous droits réservés <br> <a href="https://www.seilks.com" target="_blank">www.seilks.com</a></span>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'AppInformationsModal',
  props: ['open']
}
</script>

<style>
  .v-overlay {
    backdrop-filter: blur(4px);
  }

  .title-info {
    letter-spacing: 0px;
    color: #979797;
    text-transform: uppercase;
  }

  .text-info {
    letter-spacing: -0.39px;
    color: #707070;
    font-size: 15px;
    font-weight: 300;
  }

  .text-info > a {
    text-decoration: none;
  }
</style>