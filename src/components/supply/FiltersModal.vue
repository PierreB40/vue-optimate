<template>
  <v-dialog
    v-model="open"
    width="50vw"
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
    >
      <v-card-title>
        <v-icon class="mr-2" color="primary">mdi-filter</v-icon>
        Filtres
        <v-spacer />
        <v-icon color="primary" @click="$emit('close')">mdi-close-circle-outline</v-icon>
      </v-card-title>
      <v-divider />
      <v-card-text class="mt-5">
        <v-row class="pa-3">
          <v-col
            v-for="(filter, f) in filters"
            :key="f"
            cols="4"
          >
            <div
              style="text-align: left"
              class="title-select"
            >
              {{ filter.title }}
            </div>
            <v-autocomplete
              v-model="filter.selected"
              :items="filter.items"
              @change="changeFilters"
              solo
              chips
              multiple
              hide-details
            >
              <template v-slot:selection="data">
                <v-chip
                  v-bind="data.attrs"
                  :input-value="data.selected"
                  close
                  color="primary"
                  @click="data.select"
                  @click:close="remove(filter.title, data.item)"
                >
                  {{ data.item }}
                </v-chip>
              </template>
            </v-autocomplete>
          </v-col>
          <v-col cols="12">
            <v-btn
              style="float: right"
              color="primary"
              rounded
              @click="$emit('close')"
            >
              Valider
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
  import EventBus from "@/plugins/eventBus"

  export default {
    name: 'FiltersModal',
    props: ['open'],
    data() {
      return {
        filters: [
          {
            title: 'Acheteur',
            items: ['Acheteur 1', 'Acheteur 2', 'Acheteur 3'],
            selected: []
          },
          {
            title: 'Fournisseur',
            items: ['Fournisseur 1', 'Fournisseur 2', 'Fournisseur 3'],
            selected: []
          },
          {
            title: 'Marque',
            items: ['Marque 1', 'Marque 2', 'Marque 3'],
            selected: []
          },
          {
            title: 'Ligne',
            items: ['Ligne 1', 'Ligne 2', 'Ligne 3'],
            selected: []
          },
          {
            title: 'Famille',
            items: ['Famille 1', 'Famille 2', 'Famille 3'],
            selected: []
          },
          {
            title: 'Modèle',
            items: ['Modèle 1', 'Modèle 2', 'Modèle 3'],
            selected: []
          },
          {
            title: 'Entrepôt',
            items: ['Entrepôt 1', 'Entrepôt 2', 'Entrepôt 3'],
            selected: []
          },
          {
            title: 'Onglet',
            items: ['Onglet 1', 'Onglet 2', 'Onglet 3'],
            selected: []
          },
          {
            title: 'Statut',
            items: ['Statut 1', 'Statut 2', 'Statut 3'],
            selected: []
          }
        ]
      }
    },
    mounted () {
      EventBus.$on("DELETE_FILTER", ({title, item}) => {
        if(!title || !item) return
        this.remove(title, item)
      })  
    },
    methods: {
      remove(title, item) {
        const selected = this.filters.find(f => f.title === title).selected;
        const index = selected.findIndex(s => s === item);
        selected.splice(index, 1);
      },
      changeFilters() {
        this.$emit('change', this.filters);
      }
    }
  }
</script>

<style scoped>
  .title-select {
    letter-spacing: -0.3px;
    color: #0F0F61;
    font-size: 19px;
    font-weight: bold;
    margin-left: 10px;
    margin-bottom: 10px;
  }

  .v-autocomplete >>> .v-input__control {
    border-radius: 35px;
  }

  .v-autocomplete >>> .v-input__control > .v-input__slot {
    box-shadow: 5px 5px 10px #00000029!important;
  }

</style>