import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { layout: "navigation", title: "Accueil" },
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    meta: { layout: "simple", title: "Connexion" },
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
