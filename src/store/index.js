import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex)

import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const store = new Vuex.Store({
  state: {
    students: [
      { id: 1, name: 'weenie', age: 19 },
      { id: 2, name: 'bob', age: 22 },
      { id: 3, name: 'steven', age: 30 }
    ]
  },
  getters,
  actions,
  mutations
})
export default store
