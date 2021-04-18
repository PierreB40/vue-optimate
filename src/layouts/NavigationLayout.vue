<template>
  <v-main>
    <v-app-bar
      clipped-left
      app
    >
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-toolbar-title>Optimate</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      clipped
      app
    >
    </v-navigation-drawer>
    <slot />
  </v-main>
</template>

<script>
export default {
  name: 'NavigationLayout',
  data() {
    return {
      drawer: true
    }
  }
}
</script>