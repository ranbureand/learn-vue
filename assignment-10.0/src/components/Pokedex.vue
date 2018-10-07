<template lang="html">
  <div class="row">
    <pokemon v-for="(pokemon, index) in pokedex" @click.native="transferPokemon(index)">{{ pokemon }}</pokemon>
    <!-- add the ".native" modifier to the "click" event to react on the whole component -->
  </div>
</template>

<script>
import Pokemon from './Pokemon.vue';

export default {
  props: ['pokedex'],
  components: {
    Pokemon: Pokemon
  },
  methods: {
    transferPokemon(index) {
      this.$emit('pokemonTransfered', index);
    }
  }
}
</script>

<style lang="scss">
</style>
