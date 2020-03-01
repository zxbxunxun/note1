<template>
  <div class="tab-bar-item" @click="goRoute" :style="activePathStyle">
    <slot name="item-icon"></slot>
    <slot name="item-des"></slot>
  </div>
</template>

<script>
export default {
  name: 'TabbarItem',
  props: {
    path: {
      type: String
    },
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  methods: {
    goRoute() {
      this.path && this.$router.push(this.path)
    }
  },
  computed: {
    isActivePath() {
      return this.$route.path === this.path
    },
    activePathStyle() {
      return this.isActivePath ? { color: this.activeColor } : {}
    }
  }
}
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 3px 0;
}
.tab-bar-item > * {
  flex: 1;
  text-align: center;
  font-size: 10px;
  vertical-align: bottom;
  font-weight: 500;
}
</style>
