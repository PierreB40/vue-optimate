<template>
  <v-main>
    <toolbar
      @toogle-drawer="drawer = !drawer"
      @click-info="modalInfoOpen = true"
      @change-route="drawer = false"
    />
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
    <app-informations-modal :open="modalInfoOpen" @close="modalInfoOpen = false" />
  </v-main>
</template>

<script>
import Toolbar from '@/components/global/Toolbar'
import AppInformationsModal from '@/components/global/AppInformationsModal.vue'

export default {
  name: 'NavigationLayout',
  components: { Toolbar, AppInformationsModal },
  data() {
    return {
      drawer: false,
      modalInfoOpen: false,
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
  }
}
</script>
