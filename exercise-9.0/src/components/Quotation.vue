<template lang="html">
  <blockquote class="">
    <!--<p>{{ quotationBody }}</p>-->
    <!--<slot></slot>-->
    <div class="head">
      <slot name="head"></slot>
    </div>
    <hr>
    <div class="body">
      <slot name="body"></slot>
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
