<template>
  <div>
    <p>这是首页</p>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/product">产品</router-link>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      path: '/home/news'
    }
  },
  activated() {
    console.log('activated');
    this.$router.push(this.path)
  },
  beforeRouteLeave(to, from, next) {
    // console.log(from);
    this.path = this.$route.path
    next()
  }
}
</script>

<style>
a {
  text-decoration: none;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
