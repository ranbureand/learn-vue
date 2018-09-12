import Vue from 'vue'
import App from './App.vue'
import Intro from './components/Intro.vue'

Vue.config.productionTip = false

Vue.component('character-introduction', Intro);

new Vue({
  render: h => h(App)
}).$mount('#app')
