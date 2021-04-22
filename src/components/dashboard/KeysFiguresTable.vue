<template>
  <v-card
    class="pa-5 pt-0"
    :disabled="loading"
    style="box-shadow: 5px 5px 20px #00000029;"
  >
    <v-card-title class="title-card">Chiffres clés</v-card-title>
    <v-simple-table
      class="custom-table"
      height="450"
      fixed-header
      dense
    >
      <template v-slot:default>
        <thead>
          <tr style="background-color: #EEE;">
            <th class="text-center">
              Zone
            </th>
            <th class="text-center">
              Nb Art. An-1
            </th>
            <th class="text-center">
              Ventes An-1
            </th>
            <th class="text-center">
              Obj. Ventes An-1
            </th>
            <th class="text-center">
              Préd. saisies
            </th>
          </tr>
        </thead>
          <tbody>
            <tr
              v-for="item in data"
              :key="item.name"
            >
              <td>{{ item.collection }}</td>
              <td>{{ item.article }}</td>
              <td>{{ item.label }}</td>
              <td>{{ item.article }}</td>
              <td>{{ item.collection }}</td>
            </tr>
          </tbody>
      </template>
    </v-simple-table>
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
    name: 'keysFiguresTable',
    props: ['data', 'loading'],
  }
</script>

<style scoped>
  .title-card {
    font-weight: bold;
    color: grey;
    font-size: 23px;
    text-transform: uppercase;
  }

  .custom-table >>> thead th {
    background-color: #0F0F61!important;
    color: white!important;
    height: 40px!important;
    font-weight: bold!important;
    font-size: 13px!important;
    letter-spacing: -0.26px;
  }

  .custom-table >>> th:first-child {
    border-top-left-radius: 7px;
  }
  
  .custom-table >>> th:last-child {
    border-top-right-radius: 7px;
  }

  .custom-table >>> table td:not(:last-child), table th:not(:last-child) {
    border-right: 1px solid lightgrey;
  }

  .custom-table >>> tbody > tr:hover {
    background-color: #DAF1FD!important;
  }
  
  .custom-table >>> tbody > tr:nth-child(odd) {
    background-color: #F4F4F4;
  }

  .custom-table >>> tbody > tr > td {
    color: #0F0F61;
    letter-spacing: -0.22px;
    font-weight: bold;
  }

  .custom-table >>> .v-data-table__wrapper::-webkit-scrollbar {
    width: 10px;
    background: lightgray;
  }

  .custom-table >>> .v-data-table__wrapper::-webkit-scrollbar-thumb {
    background: #0F0F61;
  }
</style>