import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    color: 'rgb(72, 92, 212)',
    timesList: [],
    currentCube: '333'
  },
  mutations: {
    pushTime (state, time) {
      state.timesList.unshift(time)
    },
    updateCube (state, cube) {
      state.currentCube = cube
    }
  }
})

export default store
