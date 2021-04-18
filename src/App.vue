<template>
  <v-app>
    <component :is="layout">
      <router-view />
    </component>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  computed: {
    layout() {
      const name = this.$route.meta.layout || "simple"
      return `${name}-layout`
    }
  },
  watch: {
      $route: {
          immediate: true,
          handler(to) {
              document.title = to.meta.title ? `Optimate - ${to.meta.title}` : ""
          }
      },
  }
};
</script>
