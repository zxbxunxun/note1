export default {
  getAllNames(state) {
    return state.students.map(s => s.name).join(',')
  },
  getAddress(state) {
    return state.students
      .filter(s => s.address)
      .map(s => s.address)
      .join(',')
  }
}
