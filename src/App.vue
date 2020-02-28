<template>
  <div id="app">
    <h1>这是一个vue 项目</h1>
    <Hello></Hello>
  </div>
</template>

<script>
import Hello from './components/Hello.vue';
export default {
  name: 'App',
  components: {
    Hello
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
