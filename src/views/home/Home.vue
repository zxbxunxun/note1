<template>
  <div id="home">
    <!-- 顶部导航 -->
    <navbar>
      <span slot="center">首页</span>
    </navbar>
    <!-- 轮播图 -->
    <home-swiper :banners="banners"></home-swiper>
  </div>
</template>

<script>
import Navbar from 'components/content/navbar/Navbar';
import HomeSwiper from 'views/home/homeComponents/HomeSwiper';
import { getHomeMultiData } from 'api/home';
export default {
  name: 'Home',
  components: {
    Navbar,
    HomeSwiper
  },
  data() {
    return {
      banners: []
    };
  },

  created() {
    this.getHomeMultiDatas();
  },
  methods: {
    getHomeMultiDatas() {
      getHomeMultiData.then(result => {
        this.banners = result.data.banner.list;
      });
    }
  }
};
</script>

<style>
#home {
  padding-top: 44px;
}
</style>
