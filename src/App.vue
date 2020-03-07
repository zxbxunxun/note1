<template>
  <div id="app">
    <h1>this is a vue project</h1>
    <router-view></router-view>
    <tabbar>
      <tabbar-item activeColor="rgb(108,190,102)" path="/home">
        <span slot="item-icon" class="item-icon">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shouye"></use>
          </svg>
        </span>
        <span slot="item-des" class="item-text">首页</span>
      </tabbar-item>
      <tabbar-item activeColor="rgb(108,190,102)" path="/category">
        <span slot="item-icon" class="item-icon">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-paihangbang"></use>
          </svg>
        </span>
        <span slot="item-des" class="item-text">分类</span>
      </tabbar-item>
      <tabbar-item activeColor="rgb(108,190,102)" path="/search">
        <span slot="item-icon" class="item-icon">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-sousuo"></use>
          </svg>
        </span>
        <span slot="item-des" class="item-text">搜索</span>
      </tabbar-item>
      <tabbar-item activeColor="rgb(108,190,102)" path="/profile">
        <span slot="item-icon" class="item-icon">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-wodeguanzhu"></use>
          </svg>
        </span>
        <span slot="item-des" class="item-text">我的</span>
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
.item-icon {
  font-size: 18px;
  transform: scale(1.5);
  padding: 0;
  margin: 0;
}
.item-text {
  font-size: 10px;
}
</style>
