<template>
  <v-container>
    <v-toolbar
      dense
      color="primary"
      class="white--text rounded-lg mt-4 mb-4"
      flat
    >
      <v-toolbar-title style="font-weight: bold">TABLEAU DE BORD</v-toolbar-title>
      <v-spacer />
      <v-btn icon>
        <v-icon
          @click="simulateLoading"
          color="white"
        >mdi-sync</v-icon>
      </v-btn>
    </v-toolbar>
    <v-row class="pa-4">
      <v-col
        cols="4"
        v-for="(card, c) in resumes"
        :key="c"
      >
        <data-board-card
          :title="card.title"
          :value="card.value"
          :percent="card.percent"
          :icon="card.icon"
          :loading="loading"
        />
      </v-col>
      <v-col cols="8">
        <keys-figures-table
          :data="desserts"
          :loading="loading"
        />
      </v-col>
      <v-col cols="4">
        <progress-chart-card
          :loading="loading"
          :value="progress"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DataBoardCard from '@/components/dashboard/DataBoardCard.vue'
import KeysFiguresTable from '@/components/dashboard/KeysFiguresTable.vue'
import ProgressChartCard from '../components/dashboard/ProgressChartCard.vue'

export default {
  components: { DataBoardCard, KeysFiguresTable, ProgressChartCard },
  name: 'Home',
  data() {
    return {
      loading: false,
      progress: 75,
      resumes: [
        {
          title: 'objectif de vente',
          value: '194 905',
          percent: '35,5',
          icon: 'mdi-chart-line'
        },
        {
          title: 'Nb articles',
          value: '127 800',
          percent: '-34,4',
          icon: 'mdi-tag'
        },
        {
          title: 'Prédictions saisie',
          value: '8 823',
          percent: '-34,4',
          icon: 'mdi-pencil'
        }
      ],
      desserts: [
          {
            collection: 'Frozen Yogurt',
            article: 159,
            label: 159
          },
          {
            collection: 'Ice cream sandwich',
            article: 237,
            label: 159
          },
          {
            collection: 'Eclair',
            article: 262,
            label: 159
          },
          {
            collection: 'Cupcake',
            article: 305,
            label: 159
          },
          {
            collection: 'Gingerbread',
            article: 356,
            label: 159
          },
          {
            collection: 'Jelly bean',
            article: 375,
            label: 159
          },
          {
            collection: 'Lollipop',
            article: 392,
            label: 159
          },
          {
            collection: 'Honeycomb',
            article: 408,
            label: 159
          },
          {
            collection: 'Donut',
            article: 452,
            label: 159
          },
          {
            collection: 'KitKat',
            article: 518,
            label: 159
          },
          {
            collection: 'Honeycomb',
            article: 408,
            label: 159
          },
          {
            collection: 'Donut',
            article: 452,
            label: 159
          },
          {
            collection: 'KitKat',
            article: 518,
            label: 159
          },
          {
            collection: 'Honeycomb',
            article: 408,
            label: 159
          },
          {
            collection: 'Donut',
            article: 452,
            label: 159
          },
          {
            collection: 'KitKat',
            article: 518,
            label: 159
          },
          {
            collection: 'Honeycomb',
            article: 408,
            label: 159
          },
          {
            collection: 'Donut',
            article: 452,
            label: 159
          },
          {
            collection: 'KitKat',
            article: 518,
            label: 159
          },
        ],
    }
  },
  methods: {
    simulateLoading() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 1500);
    }
  }
}
</script>
