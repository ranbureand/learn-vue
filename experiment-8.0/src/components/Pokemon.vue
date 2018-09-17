<template lang="html">
  <li @click="selectPokemon()">{{ pokemon.name }}</li>
</template>

<script>
import { pokemonBus } from '../main.js';

export default {
  props: {
    pokemon: {
      type: Object,
      required: true
    }
  },
  methods: {
    selectPokemon() {
      pokemonBus.$emit('pokemonIsSelected', this.pokemon);
      console.log('Go ' + this.pokemon.name + '!');
    }
  }
}
</script>
