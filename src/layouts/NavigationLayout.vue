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
      <v-list-item
          to="/"
          exact
        >
        <v-list-item-content>
          <v-list-item-title class="title">
            Accueil
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item
          to="/supply"
          exact
        >
        <v-list-item-content>
          <v-list-item-title class="title">
            Supply
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item
          to="/forcol"
          exact
        >
        <v-list-item-content>
          <v-list-item-title class="title">
            Forcol
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item
          to="/login"
          exact
        >
        <v-list-item-content>
          <v-list-item-title class="title">
            Déconnexion
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
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