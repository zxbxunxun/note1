import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    students: [
      { id: 1, name: 'weenie', age: 18 },
      { id: 2, name: 'bob', age: 19 },
      { id: 3, name: 'allen', age: 16 },
      { id: 4, name: 'david', age: 17 },
      { id: 5, name: 'smith', age: 20 }
    ]
  },
  actions: {
    // 异步操作
  },
  mutations: {
    // 状态管理
    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count--
    },
    updateCount(state, arg) {
      state.count = arg
    }
  },
  getters: {
    moreAgeStu(state) {
      return function(age) {
        return state.students.filter(s => s.age >= age)
      }
    }
  },
  modules: {}
})

export default store
