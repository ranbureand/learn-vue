<template lang="html">
  <blockquote>
    <!--<p>{{ quotationBody }}</p>-->
    <!--<slot></slot>-->
    <div>
      <slot name="head">Head</slot>
    </div>
    <hr>
    <div>
      <!--<slot name="body"></slot>-->
      <slot></slot>
    </div>
  </blockquote>
</template>

<script>
export default {
  /*props: {
    quotationBody: {
      type: String,
    }
  }*/
}
</script>

<style lang="css" scoped>
blockquote {
  border: 4px solid orange;
  padding: 48px;
  margin: 48px auto;
}
h1 {
  color: red;
}
/* styles of slot content are defined in the child component. */
</style>
