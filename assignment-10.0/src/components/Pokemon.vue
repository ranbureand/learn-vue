<template lang="html">
  <div class="col-sm-6 col-md-4 col-lg-3">
    <div class="panel panel-default">
      <div class="panel-body pokemon">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.panel-body {

}
.pokemon {
  cursor: pointer;
  &:hover {
    background-color: aquamarine;
  }
}
</style>
