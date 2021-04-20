<template>
  <v-main>
    <v-app-bar
      color="primary"
      clipped-left
      flat
      app
    >
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
        class="ml-3"
        color="white"
        x-large
      />
      <v-toolbar-title class="pl-0">
        <v-img
          :src="require('@/assets/white-logo.png')"
          width="160"
        />
      </v-toolbar-title>
      <v-divider
        vertical
        inset
        class="ml-4 mr-5"
        color="white"
      />
      <div class="title white--text">{{ title }}</div>
      <v-spacer />
      <v-img
        :src="require('@/assets/logo-sei.png')"
        style="max-width: 100px"
        class="mr-4"
      />
      <v-btn
        class="elevation-0 white--text"
        color="#A60AA8"
        rounded
      >
        M. Dupont
      </v-btn>
      <v-btn
        icon
        color="white"
      >
        <v-icon>mdi-information-outline</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      color="primary"
      clipped
      dark
      app
    >
      <v-list-item
          v-for="(link, l) in links"
          :key="l"
          :to="link.to"
          color="white"
          exact
        >
        <v-list-item-icon>
            <v-icon v-text="link.icon" />
          </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title class="title">
            {{ link.title }}
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
      drawer: false,
      title: '',
      links: [
        {
          title: 'Dashboard',
          icon: 'mdi-view-dashboard',
          to: '/'
        },
        {
          title: 'Supply',
          icon: 'mdi-format-list-bulleted-square',
          to: '/supply'
        },
        {
          title: 'Forcol',
          icon: 'mdi-arrow-right-drop-circle',
          to: '/forcol'
        },
        {
          title: 'Déconnexion',
          icon: 'mdi-lock',
          to: '/login'
        }
      ]
    }
  },
  watch: {
      $route: {
          immediate: true,
          handler(to) {
              this.title = to.meta.title ? to.meta.title : ""
          }
      },
  }
}
</script>
