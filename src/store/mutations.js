import Vue from 'vue'
import { UPDATENAME, ADDPROPERTY } from './mutationsType'
export default {
  [UPDATENAME](state) {
    state.students[0].name = 'aero'
  },
  [ADDPROPERTY](state) {
    // state.students[0].address = 'shangHai'
    Vue.set(state.students[0], 'address', 'shangHai')
  }
}
