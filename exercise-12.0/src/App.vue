<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Directives</h1>
        <p v-text="'This is a text.'"></p>
        <!-- the "v-text" directive takes a string as an input -->
        <p v-html="'This is a <strong>strong text</strong>.'"></p>
      </div>
      <hr>
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Custom Global Directives</h1>
        <p v-highlight="'orange'">This text is colored.</p>
        <p v-highlight:background="'orange'">The background of this text is colored.</p>
        <p v-highlight:background.delayed="'orange'">The background of this text is colored, but delayed.</p>
        <!-- "highlight" is the directive, "background" is the argument, "delayed" is the modifier -->
        <h1>Custom Local Directives</h1>
        <p v-local-highlight="{ firstColor : 'orange'}">This text is colored.</p>
        <p v-local-highlight:background="{ firstColor : 'orange'}">The background of this text is colored.</p>
        <p v-local-highlight:background.blink="{ firstColor : 'orange', secondColor : 'green', delay : 500 }">The background of this text is colored and blinks.</p>
        <p v-local-highlight:background.delayed="{ firstColor : 'orange'}">The background of this text is colored, but delayed.</p>
        <p v-local-highlight:background.delayed.blink="{ firstColor : 'orange', secondColor : 'green', delay : 500 }">The background of this text is colored, but delayed, and blinks.</p>
        <p v-local-highlight:blink="{ firstColor : 'orange', secondColor : 'green', delay : 500 }">This text is colored and blinks.</p>
      </div>
    </div>
  </div>
</template>

<script>
//import FullName from './components/FullName.vue'

export default {
  directives: {
    'local-highlight': {
      bind(el, binding, vnode) {
        var delay = 0;
        if (binding.modifiers['delayed']) {
          delay = 2000;
        }
        if (binding.modifiers['blink']) {
          //let firstColor = binding.value;
          let firstColor = binding.value.firstColor;
          //let secondColor = 'yellow';
          let secondColor = binding.value.secondColor;
          let currentColor = firstColor;
          setTimeout(() => {
            setInterval(() => {
              currentColor == secondColor ? currentColor = firstColor : currentColor = secondColor;
              if (binding.arg == 'background') {
                el.style.backgroundColor = currentColor;
              } else {
                el.style.color = currentColor;
              }
            }, binding.value.delay);
          }, delay);
        } else {
          setTimeout(() => {
            if (binding.arg == 'background') {
              el.style.backgroundColor = binding.value.firstColor;
            } else {
              el.style.color = binding.value.firstColor;
            }
          }, delay);
        }
      }
    }
  }
}
</script>

<style>
</style>
