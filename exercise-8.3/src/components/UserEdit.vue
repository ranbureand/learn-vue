<template>
  <div class="component">
    <h3>You may edit the User here</h3>
    <p>Edit me!</p>
    <p>User Age: {{ myAge }}</p>
    <button type="button" name="button" @click="editAge">Edit Age</button>
  </div>
</template>

<script>
import { eventBus } from '../main.js';

export default {
  props: {
    myAge: {
      type: Number,
      default: 1,
    }
  },
  methods: {
    editAge() {
      this.myAge = 1000;
      //this.$emit('myAgeIsEdited', this.myAge);
      // emit the update property to the parent component
      //eventBus.$emit('myAgeIsEdited', this.myAge);
      // emit the update property not to this istance but to the instance "eventBus"
      eventBus.changeAge(this.myAge);
    }
  }
}
</script>

<style scoped>
div {
  background-color: lightgreen !important;
}
</style>
