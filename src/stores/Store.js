import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    user: {},
    auth_token: ''
  },
  getters: {
    guest: state => {
      return state.auth_token == ""
    }
  },
  mutations: {
    saveUser(state, payload) {
      state.user = payload
    },
    saveToken (state, token) {
      if(localStorage.getItem('default_access_token')) {
        state.auth_token = localStorage.getItem('default_access_token')
      } else {
        localStorage.setItem('default_access_token', token)
        state.auth_token = token
      }
    }
  }
})

export default store;