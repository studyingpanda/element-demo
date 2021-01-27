import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/layoutDemo',
    name: 'LayoutDemo',
    component: () => import('../views/LayoutDemo.vue')
  },
  {
    path: '/containerDemo',
    name: 'ContainerDemo',
    component: () => import('../views/ContainerDemo.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router