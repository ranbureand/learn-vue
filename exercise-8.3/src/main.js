import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  data: {
    // data properties in here can be easily accessed througout the whole application
  },
  methods: {
    changeAge(age) {
      this.$emit('myAgeIsEdited', age);
    }
    // to avoid duplicate code and instead store it centrally
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
