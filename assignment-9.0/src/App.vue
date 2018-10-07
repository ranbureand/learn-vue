<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <br>
        <button class="btn btn-primary" @click="selectComponent('appBlue', 'Squirtle')">Load Blue Template</button>
        <button class="btn btn-success" @click="selectComponent('appGreen', 'Bulbasaur')">Load Green Template</button>
        <button class="btn btn-danger" @click="selectComponent('appRed', 'Charmander')">Load Red Template</button>
        <hr>
        <div v-if="selectedComponent">
          <component :is="selectedComponent">
            <template slot="pokemon">{{ pokemon }}</template>
          </component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Blue from './components/Blue.vue';
  import Green from './components/Green.vue';
  import Red from './components/Red.vue';

  export default {
    data() {
      return {
        selectedComponent: null,
        pokemon: null,
      }
    },
    components: {
      appBlue: Blue,
      appGreen: Green,
      appRed: Red
    },
    methods: {
      selectComponent(app, pokemon) {
        this.selectedComponent = app;
        this.pokemon = pokemon;
      }
    }
  }
</script>
