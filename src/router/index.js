import Vue from 'vue';

import VueRouter from 'vue-router';

Vue.use(VueRouter);

const home = () => import('views/home/Home');
const category = () => import('views/category/Category');
const profile = () => import('views/profile/Profile');
const search = () => import('views/search/Search');

const routes = [
  {
    path: '',
    redirect: 'home'
  },
  {
    path: '/home',
    component: home
  },
  {
    path: '/category',
    component: category
  },
  {
    path: '/search',
    component: search
  },
  {
    path: '/profile',
    component: profile
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
