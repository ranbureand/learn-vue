<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User Name: {{ myName }}</p>
    <p>User Age: {{ myAge }}</p>
    <p>User Reversed Name: {{ reverseName() }}</p>
    <button type="button" name="button" @click="resetName">Reset Name (Method of the Child Component)</button>
    <!-- the above button call the method "resetName" defined in the child component -->
    <button type="button" name="button" @click="resetNameParentFunction()">Reset Name (Method of the Parent Component)</button>
    <!-- the above button call the method "resetName" defined in the parent component and passed as a prop -->
  </div>
</template>

<script>
export default {
  /*props: ['myName'],
  // the names of the properties passed to the child component need to match the names of the properties in the child component’s props
  // the names of the properties defined in 'props' need to match the names of the properties used in the component template
  */
  // define props as an object rather than an array to validate them
  /*props: {
    myName: String,
    // define a value to validate the prop against it
    // if the validation fails, the child component is not attached
    myName: [String, Array]
    // define an array of values to validate the prop against them
  },*/
  props: {
    myName: {
      type: String,
      // required: true,
      // "required" make the component usable only if a prop is passed to it
      default: 'Dilek',
      // "default" set a default property in case the prop is not passed or it is not valid
      /*type: Object
      default: function() {
        return {
          // if the prop is an object, "default" needs to be a function that returns the default object structure
        }
      }*/
    },
    myAge: {
      type: Number,
      default: 1,
    },
    resetNameParentFunction: Function
  },
  methods: {
    reverseName() {
      return this.myName.split("").reverse().join("");
      // props can be manipulated through methods as if they were normal data properties
    },
    resetName() {
      this.myName = 'Andrea';
      // the method updates the property at the level of the child component, but not also at the level of the parent component (just for the case the property is not an array or object)
      this.$emit('myNameIsReset', this.myName);
      // emit a custom event to update the property at the level of the parent component
      // eslint-disable-next-line
      console.log('The method "resetName" of the child component is executed.');
    }
    // the function reset the name and then emit an event to push the resetted name to the parent component, so that the same property can be updated accordingly also at the level of the parent component
  }
}
</script>

<style scoped>
div {
  background-color: lightcoral !important;
}
</style>
