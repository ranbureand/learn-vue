<template>
  <div>
    <h1><slot name="pokemon"></slot></h1>
  </div>
</template>

<script>
export default {
  created() {
    console.log('Green is created.')
  },
  destroyed() {
    console.log('Green is destroyed.')
  }
}
</script>

<style scoped>
div {
  border: 1px solid green;
  background-color: lightgreen;
  padding: 30px;
  margin: 20px auto;
  text-align: center
}
h1 {
  margin: 0;
}
</style>
