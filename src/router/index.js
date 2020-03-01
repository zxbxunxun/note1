import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

const Home = () => import('./../views/home/Home')
const Category = () => import('./../views/category/Category')
const Profile = () => import('./../views/profile/Profile')
const Search = () => import('./../views/search/Search')

const routes = [
  {
    path: '',
    redirect: 'home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/search',
    component: Search
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
