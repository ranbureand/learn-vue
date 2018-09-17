<template lang="html">
  <ul>
    <pokemon
      v-for="pokemon in pokemons"
      :pokemon="pokemon"
      ></pokemon>
  </ul>
</template>

<script>
import Pokemon from './Pokemon.vue';

export default {
  data() {
    return {
      pokemons: [
        { number: 1, name: 'Bulbasaur', life: 50 },
        { number: 2, name: 'Squirtle', life: 20 },
        { number: 3, name: 'Charmander', life: 40 }
      ]
    };
  },
  components: {
    pokemon: Pokemon
  }
}
</script>
