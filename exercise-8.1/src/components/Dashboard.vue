<template lang="html">
  <div class="container">
    <dashboard-head></dashboard-head>
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
import DashboardHead from './DashboardHead.vue'
import ServerList from './ServerList.vue'
import ServerDetails from './ServerDetails.vue'
import DashboardFooter from './DashboardFooter.vue'

export default {
  components: {
    //'dashboard-head': DashboardHead,
    DashboardHead,
    // ES6 syntax
    'server-list': ServerList,
    'server-details': ServerDetails,
    'dashboard-footer': DashboardFooter
  }
}
</script>
