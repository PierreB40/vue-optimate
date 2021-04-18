import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { layout: "navigation", title: "Dashboard" },
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    meta: { layout: "simple", title: "Connexion" },
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/supply',
    name: 'Supply',
    meta: { layout: "navigation", title: "Supply" },
    component: () => import(/* webpackChunkName: "supply" */ '../views/Supply.vue')
  },
  {
    path: '/forcol',
    name: 'Forcol',
    meta: { layout: "navigation", title: "Forcol" },
    component: () => import(/* webpackChunkName: "forcol" */ '../views/Forcol.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
