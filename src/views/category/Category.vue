<template>
  <div>
    <navbar>
      <div slot="center" class="nav-search">
        <input type="text" class="nav-search-ipt" />
      </div>
    </navbar>
  </div>
</template>

<script>
import Navbar from 'components/content/navbar/Navbar';
export default {
  name: 'Category',
  data() {
    return {};
  },
  components: {
    Navbar
  }
};
</script>

<style scoped>
.nav-search {
  display: flex;
  align-items: center;
  height: 100%;
}
.nav-search .nav-search-ipt {
  float: 1;
  outline: none;
  border: none;
  border-radius: 10px;
  padding: 0 0.5em;
  font-size: 12px;
  width: 100%;
  height: 30px;
}
</style>
