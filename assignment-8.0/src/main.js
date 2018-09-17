import Vue from 'vue'
import App from './App.vue'
import Dashboard from './components/Dashboard.vue'

Vue.component('dashboard', Dashboard);

new Vue({
  el: '#app',
  render: h => h(App)
})
