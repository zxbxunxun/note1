import Vue from 'vue'

import App from './App.vue'

import router from './router'
import './assets/font/iconfont'

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
