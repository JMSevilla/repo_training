import Vue from 'vue'
import Vuex from 'vuex'
import client from "./http-common";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dataArray : []
  },
  getters: {
    getter_data : (state) => {
      return state.dataArray;
    }
  },
  mutations: {
    mutate_get_data : (state, data) => {
      return state.dataArray = data;
    }
  },
  actions: {
    action_get_data({commit}) { 
      return new Promise((resolve) => {
        const request = client.get(`/api/qa-tester/get-data`)
         return request.then(res => {
          return resolve(commit(`mutate_get_data`, res))
        })
      })
    }
  },
  modules: {}
})
