<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div style="cursor: pointer;" class="d-flex align-center" >
        <h3>Пользователи</h3>
      </div>
          
      <v-spacer></v-spacer>
    </v-app-bar>
    
    <v-main>
     <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import UsersList from './components/UsersList.vue';
import CurrentUser from './components/CurrentUser.vue';

export default {
  name: 'App',

  components: {
    UsersList,
    CurrentUser
  },

  data: () => ({
    //
  }),
};
</script>
