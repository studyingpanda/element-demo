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
  },
  {
    path: '/iconDemo',
    name: 'IconDemo',
    component: () => import('../views/IconDemo.vue')
  },
  {
    path: '/buttonDemo',
    name: 'ButtonDemo',
    component: () => import('../views/ButtonDemo.vue')
  },
  {
    path: '/radioDemo',
    name: 'RadioDemo',
    component: () => import('../views/RadioDemo.vue')
  },
  {
    path: '/checkboxDemo',
    name: 'CheckboxDemo',
    component: () => import('../views/CheckboxDemo.vue')
  },
  {
    path: '/inputDemo',
    name: 'InputDemo',
    component: () => import('../views/InputDemo.vue')
  },
  {
    path: '/inputNumberDemo',
    name: 'InputNumberDemo',
    component: () => import('../views/InputNumberDemo.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router