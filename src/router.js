import VueRouter from "vue-router";
import UsersList from './components/UsersList.vue'
import CurrentUser from './components/CurrentUser.vue'
import App from './App.vue'

export default new VueRouter({
    mode: 'history',
    routes: [
      {
        path: '/',
        name:'UsersList',
        component: UsersList,
      },
      {
        path: '/currentuser',
        name:'currentuser',
        component: CurrentUser
      }
    ]
})