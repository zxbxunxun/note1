# vue project

> 基于 vue 的模块化商城项目

1. home 数据

> /home/multidata

2. home 商品

> /home/data?type=[new|pop|sell]&page=0

3. 事件总线

```javascript

  this.$bus.$emit('functionName') //触发事件总线调用

  this.$bus.$on('functionName',function) //注册事件监听

  // 通过原型将Vue实例注册为事件总线
  Vue.propertype.$bus = new Vue()
```

4. 防抖 debounce/节流 throttle

5. /detail?iid=...

6. mixin

7. 图片加载问题

8. Vue 响应式原理

8.1 Object.defineProperty 监听对象属性的改变

8.2 订阅发布者模式

9. 1 物理像素

> 像素比 = 物理像素/css 像素

```javascript
//获取像素比
var dpr = window.devicePixelRatio;
```

10. vue 组件间通信

> 父组件向子组件通信

> 子组件向父组件通信

> 隔代组件间通信

> 兄弟组件通信

10.1 实现方式

> props

> vue 自定义事件

> 消息订阅与发布

> vuex

> slot

> 事件总线
