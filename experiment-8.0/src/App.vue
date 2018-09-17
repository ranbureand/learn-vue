<template lang="html">
  <div>
    <pokedex></pokedex>
    <hr>
    <pokemon-details></pokemon-details>
  </div>
</template>

<script>
import Pokedex from './components/Pokedex.vue';
import PokemonDetails from './components/PokemonDetails.vue';

export default {
  components: {
    pokedex: Pokedex,
    pokemonDetails: PokemonDetails
  }
}
</script>
