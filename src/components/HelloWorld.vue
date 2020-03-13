<template>
  <div>
    <h1>vuex 练习手册</h1>
    <div class="item-box">
      <p>actions</p>
      <div>
        <input type="button" value="异步修改属性" @click="asyncAction" />
        <input type="button" value="添加属性" @click="addProperty" />
        <p>{{ $store.getters.getAllNames }}</p>
        <span>地址：{{ $store.getters.getAddress }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    asyncAction() {
      console.log(this.$store.dispatch)
      this.$store.dispatch('updateName').then(data => {
        console.log(data)
      })
    },
    addProperty() {
      this.$store.commit('addProperty')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item-box {
  border: 1px solid #eee;
  margin: 10px;
  padding: 10px;
  box-shadow: 0 0 2px 2px #eeeeee;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
