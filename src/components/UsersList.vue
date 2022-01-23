<template>
  <v-container>
    <v-card>
      <v-card-title>
        Список пользователей
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Поиск"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table v-if="users !=null"
        :headers="headers"
        :items="users"
        :search="search"
      >
        <template v-slot:item="props">
          <tr  style="cursor: pointer;" @click="expandRow(props.item)">
            <td>
              <!-- <router-link style="text-decoration: none; color: inherit;" to="/currentuser"> -->
              {{props.item.name}}
              <!-- </router-link> -->
            </td>
            <td>
              {{props.item.email}}
            </td>
            <td>
              {{props.item.username}}
            </td>
            <td>
              {{props.item.phone}}
            </td>
            <td>
              {{props.item.address.city}}
            </td>
            <td>
              {{props.item.company.name}}
            </td>
          </tr>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
  export default {
    name:'UsersList',
    data(){
      return{
        users: null,
        search: '',
        headers: [
          {
            text: 'Имя',
            align: 'start',
            sortable: true,
            value: 'name',
          },
          { text: 'Email', value: 'email' },
          { text: 'Username', value: 'username' },
          { text: 'Телефон', value: 'phone' },
          { text: 'Город проживания', value: 'address.city' },
          { text: 'Место работы', value: 'company.name' },
        ],
      }
    },
    methods:{
      expandRow(data){
        this.$router.push({name: 'currentuser', params: {data : data}})
      },
      getUsers(){
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(json => {
            this.users = json
          })
          
      }
    },
    mounted(){
      this.getUsers()
    }
  }
</script>
<style scoped>

</style>