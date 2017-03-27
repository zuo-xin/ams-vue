import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

import Home from '../components/pages/home.vue'
import Setting from '../components/pages/setting.vue'
import Approval from '../components/pages/approval.vue'

import homeCheck from '../components/pages/home-check.vue'
import homeChecking from '../components/pages/home-checking.vue'
import homePass from '../components/pages/home-pass.vue'
import homeRefuse from '../components/pages/home-refuse.vue'

export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      component: Home,
      children:[
        { path: '/', component: homeCheck},
        { path: '/home/check', component: homeCheck},
        { path: '/home/checking', component: homeChecking},
        { path: '/home/pass', component: homePass},
        { path: '/home/refuse', component: homeRefuse},
      ]
    },
    {
      path: '/home',
      component: Home,
      children:[
        { path: '/', component: homeCheck},
        { path: '/home/check', component: homeCheck},
        { path: '/home/checking', component: homeChecking},
        { path: '/home/pass', component: homePass},
        { path: '/home/refuse', component: homeRefuse},
      ]
    },
    {
      path: '/setting',
      component: Setting
    },
    {
      path: '/approval',
      component: Approval
    }
  ]
})
