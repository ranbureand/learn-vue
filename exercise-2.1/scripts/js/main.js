var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello',
  },
  methods: {
    consoleLog: function() {
      console.log(this.message);
    }
  }
});