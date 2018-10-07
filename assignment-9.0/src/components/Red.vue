<template>
  <div>
    <h1><slot name="pokemon"></slot></h1>
  </div>
</template>

<script>
export default {
  created() {
    console.log('Red is created.')
  },
  destroyed() {
    console.log('Red is destroyed.')
  }
}
</script>

<style scoped>
div {
  border: 1px solid red;
  background-color: lightcoral;
  padding: 30px;
  margin: 20px auto;
  text-align: center
}
h1 {
  margin: 0;
}
</style>
