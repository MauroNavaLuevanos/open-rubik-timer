import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    color: 'rgb(72, 92, 212)',
    currentCube: '333',
    loadingPage: true,
    timesList: []
  },
  mutations: {
    pushTime (state, time) {
      state.timesList.unshift(time)
    },
    updateCube (state, cube) {
      state.currentCube = cube
    },
    updateLoadingPage (state, value) {
      state.loadingPage = value
    }
  }
})

export default store
