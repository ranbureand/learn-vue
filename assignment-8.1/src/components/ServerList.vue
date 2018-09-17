<template lang="html">
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <serverItem
        v-for="server in servers"
        :server="server"
        ></serverItem>
    </ul>
  </div>
</template>

<script>
import ServerItem from './ServerItem.vue';

export default {
  data() {
    return {
      servers: [
        { id: 1, status: 'Extra Small' },
        { id: 2, status: 'Small' },
        { id: 3, status: 'Medium' },
        { id: 4, status: 'Large' },
        { id: 5, status: 'Extra Large' }
      ]
    };
  },
  components: {
    serverItem: ServerItem
  }
}
</script>
