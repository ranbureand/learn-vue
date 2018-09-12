Vue.component('the-status', {
  data: function() {
    return {
      status: 'dangerous'
    }
  },
  // data in a component needs to be a function returning a new object where the data is defined
  template: '<p>The situation is {{ status }} <button @click="revertStatus">Revert</button>.</p>',
  methods: {
    revertStatus: function() {
      this.status = 'safe';
    }
  }
});
// the first argument is the name of the component
// the second argument is the object representing the component

var exercise = new Vue({
  el: '#exercise'
});
