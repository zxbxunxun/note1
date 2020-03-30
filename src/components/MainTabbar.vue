// 主导航菜单
<template>
  <tabbar>
    <tabbar-item :activeColor="tabbarColor" path="/home">
      <span slot="item-icon" class="item-icon">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shouye"></use>
        </svg>
      </span>
      <span slot="item-des" class="item-text">首页</span>
    </tabbar-item>
    <tabbar-item :activeColor="tabbarColor" path="/category">
      <span slot="item-icon" class="item-icon">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-paihangbang"></use>
        </svg>
      </span>
      <span slot="item-des" class="item-text">分类</span>
    </tabbar-item>
    <tabbar-item :activeColor="tabbarColor" path="/search">
      <span slot="item-icon" class="item-icon">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-sousuo"></use>
        </svg>
      </span>
      <span slot="item-des" class="item-text">搜索</span>
    </tabbar-item>
    <tabbar-item :activeColor="tabbarColor" path="/profile">
      <span slot="item-icon" class="item-icon">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-wodeguanzhu"></use>
        </svg>
      </span>
      <span slot="item-des" class="item-text">我的</span>
    </tabbar-item>
  </tabbar>
</template>

<script>
import Tabbar from 'components/tabbar/Tabbar'
import TabbarItem from 'components/tabbar/TabbarItem'

export default {
  name: 'MainTabbar',
  data() {
    return {
      tabbarColor: 'rgb(108, 190, 102)'
    }
  },
  components: {
    Tabbar,
    TabbarItem
  }
}
</script>

<style>
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
