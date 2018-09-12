<template lang="html">
  <div class="character-identity">
    <p>Hello. Nice to meet you, I am a <strong>{{ kind }}</strong>.</p>
    <hr>
    <button type="button" name="button" @click="changeIdentity">Change Identity</button>
  </div>
  <!-- every element inside a template needs to be wrapped inside one single root element -->
</template>

<script>
export default {
  data: function() {
    return {
      kind: 'dinosaur'
    }
  },
  methods: {
    changeIdentity() {
      // the same as writing "changeIdentity: function() {}", but in ES6
      this.kind = 'extraterrestrial entity';
    }
  }
}
</script>

<style lang="css">
  .character-identity {
  }
  strong {
    color: red;
  }
</style>
