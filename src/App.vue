<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div style="cursor: pointer;" class="d-flex align-center">
        <router-link to="/users">Пользователи</router-link>
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>
      <!-- <router-view></router-view> -->
    <v-main>
      <UsersList/>
    </v-main>
  </v-app>
</template>

<script>
import UsersList from './components/UsersList.vue';

export default {
  name: 'App',

  components: {
    UsersList,
  },

  data: () => ({
    //
  }),
};
</script>
