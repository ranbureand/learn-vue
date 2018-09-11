var exercise1 = new Vue({
  el: '#exercise',
  data: {
    message: 'Hello world!'
  },
  beforeCreate: function() {
    console.log('beforeCreate()');
    // before the instance is created
  },
  created: function() {
    console.log('create()');
    // after the instance has been created
  },
  beforeMount: function() {
    console.log('beforeMount()');
    // before the instance is rendered in the DOM
  },
  mounted: function() {
    console.log('create()');
    // after the instance has been rendered in the DOM
  },
  beforeUpdate: function() {
    console.log('beforeUpdated()');
    // before the DOM is updated
  },
  updated: function() {
    console.log('updated()');
    // after the DOM has been updated
  },
  beforeDestroy: function() {
    console.log('beforeDestroyed()');
    // before the instance is destroyed
  },
  destroyed: function() {
    console.log('destroyed()');
    // after the instance has been destroyed
  },
  methods: {
    updateMessage: function() {
      this.message = 'Hello Space!'
    },
    destroy: function() {
      this.$destroy();
    }
  }
});
