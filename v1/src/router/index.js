import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import VueCapture from '@/components/capture'
import VueCalendar from '@/components/dayspan'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {Auth: false}
    },
    {
      path: '/vuejs_capture',
      name: 'vuejs_capture',
      component: VueCapture,
      meta: {Auth: false}
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: VueCalendar,
      meta: {Auth: false}
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.Auth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    window.store.dispatch('checkAuth')
    if (!window.store.getters.isUserAuthenticated) {
      next({
        path: '/signin'
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router
