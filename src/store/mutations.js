import Vue from 'vue'

export default {
  updateName(state) {
    state.students[0].name = 'aero'
  },
  addProperty(state) {
    // state.students[0].address = 'shangHai'
    Vue.set(state.students[0], 'address', 'shangHai')
  }
}
