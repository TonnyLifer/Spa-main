import VueRouter from "vue-router";
import UsersList from './components/UsersList.vue'
import CurrentUser from './components/CurrentUser.vue'
import App from './App.vue'

export default new VueRouter({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: UsersList,
      },
      {
        path: '/currentuser',
        component: CurrentUser,
      }
    ]
})