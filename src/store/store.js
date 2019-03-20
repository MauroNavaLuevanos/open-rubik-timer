import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    color: 'rgb(72, 92, 212)',
    currentTime: 0
  }
})

export default store
