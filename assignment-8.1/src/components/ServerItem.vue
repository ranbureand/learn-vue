<template lang="html">
  <li
    class="list-group-item"
    @click="selectServer"
    >
    Server #{{ server.id }} : {{ server.status }}
  </li>
</template>

<script>
import { serverBus } from '../main.js';

export default {
  props: {
    server: {
      type: Object,
      required: true
    }
  },
  methods: {
    selectServer() {
      serverBus.$emit('serverIsSelected', this.server);
      console.log('Server #' + this.server.id + ' is selected.');
    }
  }
}
</script>
