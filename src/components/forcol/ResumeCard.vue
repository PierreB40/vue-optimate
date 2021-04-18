<template>
  <v-card style="box-shadow: 5px 5px 20px #00000029">
    <v-card-title style="color: #979797;">{{ title }}</v-card-title>
    <v-row
      align="center"
      justify="center"
      no-gutters
    >
      <v-col cols="8">
        <v-list>
          <v-list-item
            class="line-item"
            v-for="(line, l) in lines"
            :key="l"
          >
            <v-list-item-avatar>
              <v-icon color="primary">mdi-tag</v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title
                style="color: #716F6F; font-size: 13px; font-weight: bold"
              >
                {{ line.category }}
              </v-list-item-title>
            </v-list-item-content>
            <v-list-item-action
              style="color: #716F6F; font-size: 30px"
            >
              {{ line.value }}
            </v-list-item-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-avatar>
              <v-icon color="primary">mdi-basket</v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title
                style="color: #716F6F; font-size: 13px; font-weight: bold"
              >
                Total
              </v-list-item-title>
            </v-list-item-content>
            <v-list-item-action
              style="color: #716F6F; font-size: 30px"
            >
              {{ total }}
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'ResumeCard',
  props: ['title', 'lines'],
  computed: {
    total() {
      return Math.round(this.lines.reduce((a, b) => Number(a.value.replace(',', '.')) + Number(b.value.replace(',', '.'))))
    }
  }
}
</script>

<style>
  .line-item {
    border-bottom: 0.3px solid #9b9797;
  }
</style>