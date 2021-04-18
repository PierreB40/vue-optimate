import Vue from 'vue'
import App from './App.vue'
import router from './plugins/router'
import vuetify from './plugins/vuetify'

import SimpleLayout from "./layouts/SimpleLayout"
import NavigationLayout from "./layouts/NavigationLayout"

Vue.config.productionTip = false

Vue.component("simple-layout", SimpleLayout)
Vue.component("navigation-layout", NavigationLayout)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
