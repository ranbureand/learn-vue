<template lang="html">
  <div class="row">
    <div class="col-sm-12">
      <h3>Pokedex</h3>
      <div class="progress">
        <div class="progress">
          <div
            class="progress-bar"
            role="progressbar"
            aria-valuenow="60"
            aria-valuemin="0"
            aria-valuemax="100"
            :style="{width: (pokemonCount / pokedexLimit) * 100 + '%'}">
            {{ pokemonCount }} / {{ pokedexLimit }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'pokemonCount',
    'pokedexLimit'
  ]
}
</script>

<style lang="css">
</style>
