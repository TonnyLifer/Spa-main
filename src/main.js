import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


new Vue({
  el: '#app',
  vuetify,
  router,
  render: h => h(App)
})
