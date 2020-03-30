<template>
  <div class="nav-bar">
    <div class="nav-left">
      <slot name="left"></slot>
    </div>
    <div class="nav-center">
      <slot name="center"></slot>
    </div>
    <div class="nav-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
};
</script>

<style>
.nav-bar {
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: var(--color-tint);
  display: flex;
  line-height: 44px;
  height: 44px;
  text-align: center;
}
.nav-left,
.nav-right {
  flex: 2;
}
.nav-center {
  flex: 6;
}
</style>
