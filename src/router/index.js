import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dev-layout',
    name: 'DevLayout',
    component: () => import(/* webpackChunkName: "dev-layout" */ '../views/layouts/DevLayout.vue')
  },
  {
    path: '/ecommerce-layout',
    name: 'EcommerceLayout',
    component: () => import(/* webpackChunkName: "ecommerce-layout" */ '../views/layouts/EcommerceLayout.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
