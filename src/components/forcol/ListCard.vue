<template>
  <v-card
    style="box-shadow: 5px 5px 20px #00000029"
    class="pa-4"
  >
    <v-card-title style="color: #979797;">LISTE DES ARTICLES</v-card-title>
    <v-simple-table
      class="custom-table"
      height="300"
      fixed-header
      dense
    >
      <template v-slot:default>
        <thead>
          <tr style="background-color: #EEE;">
            <th class="text-center">
              Collection
            </th>
            <th class="text-center">
              Article
            </th>
            <th class="text-center">
              Libellé Article
            </th>
          </tr>
        </thead>
          <tbody>
            <tr
              v-for="item in desserts"
              :key="item.name"
            >
              <td>{{ item.collection }}</td>
              <td>{{ item.article }}</td>
              <td>{{ item.label }}</td>
            </tr>
          </tbody>
      </template>
    </v-simple-table>
  </v-card>
</template>

<script>
export default {
  name: 'ListCard',
  data () {
    return {
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
      ],
    }
  },
}
</script>

<style scoped>
  thead th {
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

  .custom-table >>> tbody > tr > td:not(:last-child) {
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