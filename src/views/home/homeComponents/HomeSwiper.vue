<template>
  <van-swipe
    class="my-swipe"
    :autoplay="3000"
    indicator-color="white"
    :initial-swipe="initialIndex"
    ref="swipe"
  >
    <van-swipe-item v-for="(item, index) in banners" :key="index">
      <img v-lazy="item.image" class="banner-img" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      swipeIndex: 0,
      initialIndex: 0
    };
  },
  components: {},
  methods: {},
  deactivated() {
    this.initialIndex = this.$refs['swipe'].activeIndicator;
  }
};
</script>

<style>
.banner-img {
  width: 100%;
}
</style>
