<template>
  <div>
    <p>{{ $store.state.count }}</p>
    <hr />
    <query-students></query-students>
  </div>
</template>

<script>
import QueryStudents from './QueryStudents'
export default {
  name: 'CounterInfo',
  components: {
    QueryStudents
  }
}
</script>

<style></style>
