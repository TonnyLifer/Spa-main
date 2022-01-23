import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import VueRouter from 'vue-router'
import UsersList from './components/UsersList.vue';
import CurrentUser from './components/CurrentUser.vue';

Vue.use(VueRouter)


new Vue({
  el: '#app',
  vuetify,
  router,components: {
    UsersList,
    CurrentUser
  },
  render: h => h(App)
})
