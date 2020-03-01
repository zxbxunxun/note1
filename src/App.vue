<template>
  <div id="app">
    <h1>this is a vue project</h1>
    <router-view></router-view>
    <tabbar>
      <tabbar-item path="/home">
        <span slot="item-icon">1</span>
        <span slot="item-des">首页</span>
      </tabbar-item>
      <tabbar-item path="/category">
        <span slot="item-icon">2</span>
        <span slot="item-des">分类</span>
      </tabbar-item>
      <tabbar-item path="/search">
        <span slot="item-icon">3</span>
        <span slot="item-des">搜索</span>
      </tabbar-item>
      <tabbar-item path="/profile">
        <span slot="item-icon">4</span>
        <span slot="item-des">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import Tabbar from './components/tabbar/Tabbar.vue'
import TabbarItem from './components/tabbar/TabbarItem'
export default {
  name: 'App',
  components: {
    Tabbar,
    TabbarItem
  }
}
</script>

<style>
@import './assets/css/base.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 12px;
}
</style>
