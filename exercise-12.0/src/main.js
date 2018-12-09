import Vue from 'vue'
import App from './App.vue'

Vue.directive('highlight', {
  bind(el, binding, vnode) {
    //el.style.backgroundColor = 'orange';
    //el.style.backgroundColor = binding.value;
    // "binding.value" is the value passed to the directive in the HTML code
    var delay = 0;
    if (binding.modifiers['delayed']) {
      delay = 2000;
    }
    setTimeout(() => {
      if (binding.arg == 'background') {
        // "binding.arg" is the argument passed to the directive
        el.style.backgroundColor = binding.value;
      } else {
        el.style.color = binding.value;
      }
    }, delay);
  }
});
// create a global directive named "highlight"
// first argument > name of the directive
// second argument > object configuring the directive

new Vue({
  el: '#app',
  render: h => h(App)
})
