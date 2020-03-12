<template>
  <div>
    <label for="query">查询学生年龄</label>
    <input type="text" id="query" @keyup.enter="queryStu" v-model="age" />
    <div v-if="students.length">
      <p>查询结果</p>
      <ul>
        <li v-for="(item, index) in students" :key="index">{{ `姓名: ${item.name},年龄： ${item.age}` }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QueryStudents',
  data() {
    return {
      age: '',
      students: []
    }
  },
  methods: {
    queryStu() {
      const age = parseInt(this.age)
      this.students = this.$store.getters.moreAgeStu(age)
      this.$store.commit('updateCount', this.students.length)
    }
  }
}
</script>

<style></style>
