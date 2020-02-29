# vue-project1

## 路由

1.路由懒加载

```javascript

{
  path:'/home',
  component:()=>import('./Components/Home.vue')
}

```

2.路由导航守卫

```javascript
// 前置导航守卫
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

// 后置导航守卫
router.afterEach((to, from) => {
  console.log(to.meta.title)
})
```
