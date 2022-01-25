import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: null
  },
  mutations: {
      SET_USER(state,data){
        state.users = data
      }
  },
  getters:{
    currentUser(state){
        return state.users
      }
  },
  actions:{
      getUser({commit},payload){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                if(json[payload]){
                  commit('SET_USER',json[payload])}
        })
          
      }
  }
})