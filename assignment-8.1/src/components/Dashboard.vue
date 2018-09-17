<template lang="html">
  <div class="container">
    <dashboard-header></dashboard-header>
    <hr>
    <div class="row">
      <server-list></server-list>
      <server-details></server-details>
    </div>
    <hr>
    <dashboard-footer></dashboard-footer>
  </div>
</template>

<script>
import Header from './Header.vue'
import ServerList from './ServerList.vue'
import ServerDetails from './ServerDetails.vue'
import Footer from './Footer.vue'

export default {
  components: {
    'dashboard-header': Header,
    'server-list': ServerList,
    'server-details': ServerDetails,
    'dashboard-footer': Footer
  }
}
</script>
