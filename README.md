# vuex

## install vuex

> npm install --save vuex

## 注册 vuex

```javascript
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {},
  actions: {},
  mutations: {},
  getters: {},
  modules: {}
})

export default store
```
