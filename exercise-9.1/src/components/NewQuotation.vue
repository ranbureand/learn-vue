<template lang="html">
  <div>
    <h3>New Quotation</h3>
    <button type="button" name="button" @click="counter++">Increase to {{counter}}!</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0
    };
  },
  destroyed() {
    console.log('New Quotation is destroyed.')
  },
  deactivated() {
    console.log('New Quotation is deactivated.')
  },
  activated() {
    console.log('New Quotation is activated.')
  }
}
</script>
