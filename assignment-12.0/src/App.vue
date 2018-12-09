<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <button
          class="btn btn-primary"
          v-custom-on:click="clicked"
          >Click Me</button>
        <hr>
        <div
          style="width: 100px; height: 100px; background-color: SpringGreen;"
          v-custom-on:mouseenter="mouseEntered"
          v-custom-on:mouseleave="mouseLeft"
          ></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    directives: {
      'custom-on': {
        bind(el, binding) {
          /*el.onclick = function() {
            binding.value;
          }*/
          const type = binding.arg;
          const myFunction = binding.value;
          el.addEventListener(type, myFunction);
          // create a generic event listener
        }
      }
    },
    methods: {
      clicked() {
        console.log('Clicked.');
      },
      mouseEntered() {
        console.log('Mouse entered.');
      },
      mouseLeft() {
        console.log('Mouse left.');
      }
    }
  }
</script>

<style>
</style>
