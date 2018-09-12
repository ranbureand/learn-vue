<template lang="html">
  <div class="">
    <strong>title</strong>
    <character-identity v-for="character in 5"></character-identity>
  </div>
</template>

<script>
import CharacterIdentity from './CharacterIdentity.vue'

export default {
  components: {
    'character-identity': CharacterIdentity
  }
}
</script>

<style lang="css">
</style>
