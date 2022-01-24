import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import VueRouter from 'vue-router'
import UsersList from './components/UsersList.vue';
import CurrentUser from './components/CurrentUser.vue';
import Vuex from 'vuex';
import store from './store/index'

Vue.use(VueRouter)
Vue.use(Vuex)


new Vue({
  el: '#app',
  vuetify,
  router,
  store,
  components: {
    UsersList,
    CurrentUser
  },
  render: h => h(App)
})
