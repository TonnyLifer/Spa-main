import VueRouter from "vue-router";
import UsersList from './components/UsersList.vue'
import App from './App.vue'

export const router = new VueRouter({
    mode: 'history',
    routes: [
      {
        path: '/users',
        component: UsersList,
      },
      {
        path: '/',
        component: App,
      }
    ]
})