import Vue from 'vue'
import App from './App.vue'

import request from './api'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

request({ url: '/home/multidata' }).then(
  res => {
    console.log(res)
  },
  err => {
    console.log(err)
  }
)
