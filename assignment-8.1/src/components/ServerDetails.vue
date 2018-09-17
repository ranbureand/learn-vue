<template lang="html">
  <div class="col-xs-12 col-sm-6">
    <p v-if="!server">Select a server!</p>
    <p v-else>Server #{{ server.id }} : {{ server.status }} is selected.</p>
    <hr>
    <button type="button" name="button" @click="setToMedium()">Set to Medium</button>
  </div>
</template>

<script>
import { serverBus } from '../main.js';

export default {
  data() {
    return {
      server: null,
    }
  },
  methods: {
    setToMedium() {
      this.server.status = 'Medium';
    }
  },
  created() {
    serverBus.$on('serverIsSelected', (server) => {
      this.server = server;
    });
  }
}
</script>
