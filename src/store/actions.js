import { UPDATENAME } from './mutationsType'

export default {
  updateName(context) {
    return new Promise(resolve => {
      setTimeout(() => {
        context.commit(UPDATENAME)
        resolve('success')
      }, 1000)
    })
  }
}
