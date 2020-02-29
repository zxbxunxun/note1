import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 路由组件 懒加载模式

const Home = () => import('./../components/Home')
const HomeNews = () => import('./../components/HomeComponents/News')
const HomeProduct = () => import('./../components/HomeComponents/Product')
const About = () => import('./../components/About')
const router = new VueRouter({
  routes: [
    {
      path: '',
      redirect: 'home',
      meta: {
        title: '这是vue项目'
      }
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: 'news',
          component: HomeNews,
          name: '新闻'
        },
        {
          path: 'product',
          component: HomeProduct
        },
        // {
        //   path: '',
        //   redirect: 'news'
        // }
      ],
      meta: {
        title: '首页'
      }
    },
    {
      path: '/about',
      component: About,
      meta: {
        title: '关于'
      }
    }
  ],
  // 启用h5 history模式
  mode: 'history'
})

// 导航守卫
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || to.name
  next()
})
export default router
