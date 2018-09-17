<template lang="html">
  <div v-if="!pokemon">
    <p>You have not selected any pokemon yet.</p>
  </div>
  <div v-else>
    <ul>
      <li>№: {{ pokemon.number }}</li>
      <li>Name: {{ pokemon.name }}</li>
      <li>Life: {{ pokemon.life }}</li>
    </ul>
    <button type="button" name="button" @click="cure()">Cure</button>
  </div>
</template>

<script>
import { pokemonBus } from '../main.js';

export default {
  data() {
    return {
      pokemon: null,
    }
  },
  methods: {
    cure() {
      this.pokemon.life = 100;
    }
  },
  created() {
    pokemonBus.$on('pokemonIsSelected', (pokemon) => {
      this.pokemon = pokemon;
    });
  }
}
</script>
