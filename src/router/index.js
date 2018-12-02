import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import VueHome from '@/components/vuejs/home'
import VueCapture from '@/components/vuejs/topics'
import VueCalendar from '@/components/about'
import VueCreateArticle from '@/components/vuejs/articles/create'
import VueViewArticle from '@/components/vuejs/articles/view'

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
      path: '/vuejs',
      name: 'vuejs_home',
      component: VueHome,
      meta: {Auth: false}
    },
    {
      path: '/vuejs/topics',
      name: 'vuejs_capture',
      component: VueCapture,
      meta: {Auth: false}
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: VueCalendar,
      meta: {Auth: false}
    },
    {
      path: '/vuejs/article/',
      name: 'vuejs_create_article',
      component: VueCreateArticle,
      meta: {Auth: false}
    },
    {
      path: '/vuejs/article/:id',
      name: 'vuejs_view_article',
      component: VueViewArticle,
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
