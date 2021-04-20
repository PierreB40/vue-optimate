<template>
  <v-app-bar
    color="primary"
    clipped-left
    flat
    app
  >
  <v-app-bar-nav-icon
    @click="$emit('toogle-drawer')"
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
</template>

<script>
export default {
  name: 'Toolbar',
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