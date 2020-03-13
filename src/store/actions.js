export default {
  updateName(context) {
    return new Promise(resolve => {
      setTimeout(() => {
        context.commit('updateName')
        resolve('success')
      }, 1000)
    })
  }
}
