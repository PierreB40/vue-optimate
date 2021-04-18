<template>
  <v-container>
    <v-toolbar
      dense
      color="primary"
      class="white--text rounded-lg mt-4 mb-4"
      flat
    >
      <v-toolbar-title style="font-weight: bold">GESTION DE LA RÉPARTITION VARIANTE/TAILLE</v-toolbar-title>
    </v-toolbar>
    <v-row>
      <v-col cols="6">
        <informations-card :data="informations" />
      </v-col>
      <v-col cols="6">
        <list-card />
      </v-col>
      <v-col
        cols="6"
        v-for="(resume, r) in resumes"
        :key="r"
      >
        <resume-card
          :title="resume.title"
          :lines="resume.lines"
        />
      </v-col>
      <v-col cols="12">
        <v-btn
          rounded
          small
          color="primary"
          class="ml-2 pl-5 pr-5"
          style="float: right;"
        >OK</v-btn>
        <v-btn
          rounded
          small
          outlined
          color="error"
          style="float: right;"
        >Annuler</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ResumeCard from '@/components/forcol/ResumeCard.vue'
import InformationsCard from '@/components/forcol/InformationsCard.vue'
import ListCard from '@/components/forcol/ListCard.vue'

export default {
  components: { ResumeCard, InformationsCard, ListCard },
  name: 'Forcol',
  data() {
    return {
      informations: {
        "ght": "LA01432TF3",
        "brand": "LA MAISON",
        "size": "2TP",
        "line": "FEMME",
        "ghv": "",
        "zone": "SUISSE",
        "variant": "",
        "canal": "COMPTES CL"
      },
      resumes: [
        {
          title: 'TOURNÉE',
          lines: [
            {
              category: 'XS / S',
              value: '68,06'
            },
            {
              category: 'M / L',
              value: '31,93'
            }
          ]
        },
        {
          title: 'RÉASSORT',
          lines: [
            {
              category: 'XS / S',
              value: '63,01'
            },
            {
              category: 'M / L',
              value: '36,98'
            }
          ]
        }
      ]
    }
  }
}
</script>
