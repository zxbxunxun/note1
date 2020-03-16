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
  text-align: center;
  flex: 1;
}
.tab-bar-item {
  padding: 6px 0 3px;
}
.tab-bar-item > * {
  display: block;
}
</style>
