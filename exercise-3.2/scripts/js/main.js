var app = new Vue({
  el: '#exercise',
  data: {
    color: 'gray',
    width: 100,
  },
  computed: {
    myStyle: function() {
      return {
        'background-color': this.color,
        'width': this.width + 'px',
      };
    },
  }
});
