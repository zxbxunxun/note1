<template>
  <div id="app">
    <h1>this is a vue project</h1>
    <router-view></router-view>
    <!-- tabbar导航 -->
    <main-tabbar></main-tabbar>
  </div>
</template>

<script>
import MainTabbar from 'components/MainTabbar'
export default {
  name: 'App',
  components: {
    MainTabbar
  }
}
</script>

<style>
@import 'assets/css/base.css';

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
