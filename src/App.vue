<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div style="cursor: pointer;" class="d-flex align-center" >
        <router-link style="text-decoration: none; color: inherit;" to="/"><h3> Пользователи</h3></router-link>
      </div>
          
      <v-spacer></v-spacer>
    </v-app-bar>
    
    <v-main>
     <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>


export default {
  name: 'App',


  data: () => ({
    //
  }),
};
</script>
