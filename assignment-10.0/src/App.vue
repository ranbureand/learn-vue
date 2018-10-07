<template>
  <div class="container">
    <pokedex-header :pokemonCount="pokedex.length" :pokedexLimit="pokedexLimit"></pokedex-header>
    <catch-pokemon @pokemonCaught="catchPokemon"></catch-pokemon>
    <pokedex :pokedex="pokedex" @pokemonTransfered="transferPokemon"></pokedex>
    <div class="row">
      <div class="col-sm-12 text-center">
        <div class="alert alert-info">Press on a Pokemon to transfer it to the Professor.</div>
      </div>
    </div>
  </div>
</template>

<script>
import PokedexHeader from './components/PokedexHeader.vue';
import CatchPokemon from './components/CatchPokemon.vue';
import Pokedex from './components/Pokedex.vue';

export default {
  data() {
    return {
      pokedex: [
        'Bulbasaur'
      ],
      pokedexLimit: 8,
    }
  },
  methods: {
    catchPokemon(pokemon) {
      if (this.pokedex.length >= this.pokedexLimit) {
        alert('Your storage is full: transfer some Pokemon to the Professor.');
        return;
      }
      this.pokedex.push(pokemon);
    },
    transferPokemon(index) {
      this.pokedex.splice(index, 1);
    }
  },
  components: {
    PokedexHeader: PokedexHeader,
    CatchPokemon: CatchPokemon,
    Pokedex: Pokedex
  }
}
</script>

<style lang="scss">
</style>
