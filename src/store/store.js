import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    color: 'rgb(72, 92, 212)'
  }
})

export default store
