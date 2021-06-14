// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import axios from 'axios'
import Vue from 'vue'
import lodash from 'lodash'
import highlights from 'highlight.js'
import marked from 'marked'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { store } from './store'
import Form from './core/form'
import CustXHR from './core/xhr'
import Errors from './core/errors'
import lstore from './core/lstorage'

// DaySpanVuetify 달력 import
import DaySpanVuetify from 'dayspan-vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'dayspan-vuetify/dist/lib/dayspan-vuetify.min.css'

// components
import AutoSizeText from './components/shared/autosize-text'

window.lsd = lstore.lsd
window.store = store
window.axios = axios
window._ = lodash
window.axios.defaults.baseURL = (process.env.NODE_ENV !== 'production') ? 'http://localhost:8066' : 'http://localhost:8066'
window.Form = Form
window.CustXHR = CustXHR
window.Errors = Errors
window.bus = new Vue()

window.highlights = highlights
window.highlights.configure({
  classPrefix: 'hljs-',
  tabReplace: null,
  useBR: true
})
window.marked = marked
window.marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function (code) {
    return window.highlights.highlightAuto(code).value
  },
  pedantic: false,
  gfm: true,
  tables: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
})

Vue.config.productionTip = false

Vue.use(Vuetify, {
  theme: {
    primary: '#03A9F4',
    secondary: '#03A9F4',
    accent: '#FF5722',
    error: '#f44336',
    warning: '#ffeb3b',
    info: '#2196f3',
    success: '#4caf50'
  }
})

Vue.use(DaySpanVuetify, {
  methods: {
    getDefaultEventColor: () => '#1976d2'
  }
})

// Object.defineProperty(Vue.prototype, '_', { value: lodash })
// Object.defineProperty(Vue.prototype, 'marked', { value: marked })

Vue.config.productionTip = process.env.NODE_ENV === 'production'

// custom components
Vue.component('autosize-text', AutoSizeText)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
