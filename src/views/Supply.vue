<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="data"
      :single-expand="singleExpand"
      :expanded.sync="expanded"
      show-expand
      item-key="code"
      :items-per-page="-1"
      :search="search"
      class="custom-table"
      hide-default-footer
    >
      <template v-slot:top>
        <v-toolbar
          flat
          dense
        >
          <v-btn
            rounded
            class="primary--text custom-shadow"
            color="white"
          >
            <v-icon
              left
            >
              mdi-filter
            </v-icon>
            Filtres
          </v-btn>
          <v-spacer></v-spacer>
          <v-text-field
            v-model="searchInput"
            class="search-input"
            placeholder="Recherche"
            hide-details
            clearable
            solo
            @click:clear="search = ''"
          />
          <v-btn
            color="primary"
            class="ml-2 rounded-lg"
            style="height: 48px"
            small
            @click="search = searchInput"
          >
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </v-toolbar>
      </template>
      <template v-slot:[`item.data-table-expand`]="{ expand, isExpanded }">
        <v-icon
          color="primary"
          small
          @click="expand(!isExpanded)"
        >
          {{ isExpanded ? 'mdi-arrow-down-drop-circle' : 'mdi-arrow-right-drop-circle' }}
        </v-icon>
      </template>
      <template v-slot:[`item.statut`]>
        <v-btn
          color="primary"
          class="ma-1"
          block
          x-small
          rounded
        >
          Valider
        </v-btn>
        <v-btn
          color="primary"
          class="ma-1"
          block
          x-small
          outlined
          rounded
        >
          Refuser
        </v-btn>
      </template>
      <template v-slot:[`item.nouveau`]="{ item }">
        <v-chip
          label
          outlined
        >
          {{ item.nouveau }}
        </v-chip>
      </template>
      <template v-slot:[`item.commentaires`]="{ item }">
        <v-chip
          label
          outlined
        >
          {{ item.commentaires }}
        </v-chip>
      </template>
      <template v-slot:expanded-item>
        <td
          colspan="13"
          class="pa-0"
          style="box-shadow: none"
        >
          <v-card
            color="#F5F5F5"
            class="pa-5"
            style="box-shadow: 5px 5px 20px #00000029"
          >
            <v-row>
              <v-col
                cols="6"
                style="font-weight: bold; color: #716F6F;"
              >
                FOURNISSEUR : KHM TEXTIL LTD <br>
                ACHETEUR : CHRISTOPHER <br>
                MARQUE : LA MAISON
              </v-col>
              <v-col
                cols="3"
                style="color: #716F6F;"
              >
                <div style="font-weight: bold;">DÉLAIS</div>
                Fabrication: 90 <br>
                Transport: 10 <br>
                Approche: 2 <br>
                Mise à disposition: 5
              </v-col>
              <v-col
                cols="3"
                style="color: #716F6F;"
              >
                <div style="font-weight: bold;">MINIMUM</div>
                Modèle: 1000<br>
                Coloris: 500<br>
                Taille: 0
              </v-col>
            </v-row>
          </v-card>
        </td>
      </template>
      <template v-slot:[`body.append`]>
        <tr class="text-center">
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <v-chip
              color="primary"
              label
              outlined
            >
              {{ sumPrevision }}
            </v-chip>
          </td>
          <td>
            <v-chip
              color="primary"
              label
              outlined
            >
              {{ sumCommands }}
            </v-chip>
          </td>
          <td>
            <v-chip
              color="primary"
              label
              outlined
            >
              {{ sumCurrents }}
            </v-chip>
          </td>
          <td>
            <v-chip
              color="primary"
              label
              outlined
            >
              {{ sumValids }}
            </v-chip>
          </td>
          <td></td>
          <td>
            <v-chip
              color="primary"
              label
              outlined
            >
              {{ sumNews }}
            </v-chip>
          </td>
          <td></td>
          <td>
            <v-chip
              color="primary"
              label
              outlined
            >
              {{ sumPasts }}
            </v-chip>
          </td>
        </tr>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
  export default {
    name: 'Supply',
    data() {
      return {
        search: '',
        searchInput: '',
        expanded: [],
        singleExpand: false,
        headers: [
          { text: 'Famille', value: 'famille', align: 'center', },
          { text: 'Code Modele', value: 'code', align: 'center', },
          { text: 'Libelle', value: 'libelle', align: 'center', },
          { text: 'Colori', value: 'colori', align: 'center', },
          { text: 'Prévision tournée', value: 'prevision', align: 'center', },
          { text: 'Commandes', value: 'commandes', align: 'center', },
          { text: 'OA en cours', value: 'encours', align: 'center', },
          { text: 'OA validés', value: 'valides', align: 'center', },
          { text: 'Statut', value: 'statut', align: 'center', },
          { text: 'Nouveau CA validé', value: 'nouveau', align: 'center', },
          { text: 'Commentaires', value: 'commentaires', align: 'center', },
          { text: 'OA à passer', value: 'passer', align: 'center', },
        ],
        data: [
          {
            "famille": "Gilets",
            "code": "BOO272BH19",
            "libelle": "GILET MANCHE 7/8",
            "colori": "MINERAL CHINE",
            "prevision": "4 313",
            "commandes": "2 116",
            "encours": "2 730",
            "valides": "200",
            "nouveau": "0",
            "commentaires": "",
            "passer": "823"
          },
          {
            "famille": "PULLS",
            "code": "OPA224H19",
            "libelle": "PULL ML COL ROND",
            "colori": "NOIR",
            "prevision": "4 313",
            "commandes": "2 116",
            "encours": "2 730",
            "valides": "200",
            "nouveau": "0",
            "commentaires": "",
            "passer": "823"
          },
          {
            "famille": "T-SHIRTS",
            "code": "LOLO15H19",
            "libelle": "T-SHIRT MC COL ROND",
            "colori": "BLANC",
            "prevision": "4 313",
            "commandes": "2 116",
            "encours": "2 730",
            "valides": "200",
            "nouveau": "0",
            "commentaires": "",
            "passer": "823"
          },
          {
            "famille": "VESTES",
            "code": "SNOP183H19",
            "libelle": "VESTE MIXTE",
            "colori": "ECRU",
            "prevision": "4 313",
            "commandes": "2 116",
            "encours": "2 730",
            "valides": "200",
            "nouveau": "0",
            "commentaires": "",
            "passer": "823"
          }
        ],
      }
    },
    computed: {
      sumPrevision() {
        return this.data.reduce((a, b) =>  a + Number(b.prevision.replace(' ', '')) , 0)
      },
      sumCommands() {
        return this.data.reduce((a, b) =>  a + Number(b.commandes.replace(' ', '')) , 0)
      },
      sumCurrents() {
        return this.data.reduce((a, b) =>  a + Number(b.encours.replace(' ', '')) , 0)
      },
      sumValids() {
        return this.data.reduce((a, b) =>  a + Number(b.valides.replace(' ', '')) , 0)
      },
      sumNews() {
        return this.data.reduce((a, b) =>  a + Number(b.nouveau.replace(' ', '')) , 0)
      },
      sumPasts() {
        return this.data.reduce((a, b) =>  a + Number(b.passer.replace(' ', '')) , 0)
      }
    }
  }
</script>

<style scoped>
  .search-input {
    max-width: 250px;
  }

  .custom-shadow {
    box-shadow: 5px 5px 20px #00000029;
  }

  .custom-table >>> .v-data-table__wrapper {
    padding: 10px;
  }

  .custom-table >>> .v-data-table-header th.sortable .v-data-table-header__icon:before {
    color: white;
  }

  .custom-table >>> table {
    border-collapse:separate; 
    border-spacing: 0 0.8rem!important;
  }

  .custom-table >>> th:first-child {
    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;
  }
  
  .custom-table >>> th:last-child {
    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
  }

  .custom-table >>> thead th {
    box-shadow: 5px 5px 20px #00000029;
    background-color: #0F0F61!important;
    color: white!important;
    height: 40px!important;
    font-weight: bold!important;
    font-size: 13px!important;
    letter-spacing: -0.26px;
    text-transform: uppercase;
  }

  .custom-table >>> tbody tr {
    box-shadow: 5px 5px 20px #00000029;
    background: #FFFFFF 0% 0% no-repeat padding-box ;
    height: 80px;
  }

  .custom-table >>> tbody > tr > td:first-child {
    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;
  }

  .custom-table >>> tbody > tr > td:nth-child(-n + 5):not(:first-child) {
    color: #0F0F61;
    font-weight: bold;
    font-size: 15px;
    letter-spacing: -0.3px;
  }
  
  .custom-table >>> tbody > tr > td:nth-child(5) {
    border-right: 0.5px solid lightgray;
  }

  .custom-table >>> tbody > tr > td:nth-child(n+6):nth-last-child(n+5), .custom-table >>> tbody > tr > td:last-child{
    font-weight: 300;
    color: #716F6F;
    font-size: 15px;
  }

  .custom-table >>> tbody > tr > td:last-child {
    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
  }

  .custom-table >>> .v-data-table__wrapper tbody tr.v-data-table__expanded__content {
    box-shadow: none;
  }

  .custom-table >>> .v-data-table__wrapper tbody tr.v-data-table__expanded__content td {
    border: none!important;
  }

</style>
