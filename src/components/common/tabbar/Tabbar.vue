<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Tabbar'
}
</script>

<style>
.tab-bar {
  width: 100%;
  height: 49px;
  background: #f6f6f6;
  position: fixed;
  display: flex;
  bottom: 0;
  left: 0;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.08);
}
</style>
