<template>
  <div>
    <p>hello vue js</p>
    <counter-action></counter-action>
    <counter-info></counter-info>
  </div>
</template>

<script>
import CounterAction from './CounterAction'
import CounterInfo from './CounterInfo'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    CounterInfo,
    CounterAction
  }
}
</script>

<style scoped></style>
