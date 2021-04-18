<template>
  <v-card style="box-shadow: 5px 5px 20px #00000029">
    <v-card-title style="color: #979797;">LISTE DES ARTICLES</v-card-title>
    <v-simple-table
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
  tbody > tr:nth-child(odd) {
    background-color: #F4F4F4;
  }
</style>