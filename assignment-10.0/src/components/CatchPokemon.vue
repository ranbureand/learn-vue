<template lang="html">
  <div class="row">
    <form action="">
      <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
        <label>Pokemon</label>
        <textarea class="form-control" name="name" rows="2" cols="80" v-model="pokemon"></textarea>
      </div>
      <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
        <button class="btn btn-primary" @click.prevent="catchPokemon">Catch Pokemon</button>
        <!-- prevent the default behavior of the button, that is submitting the form and reloading the page -->
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pokemon: '',
    };
  },
  methods: {
    catchPokemon() {
      this.$emit('pokemonCaught', this.pokemon);
      this.pokemon = '';
    }
  }
}
</script>

<style lang="css">
</style>
