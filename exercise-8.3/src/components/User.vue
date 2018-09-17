<template>
  <div class="component">
    <h1>The User Component</h1>
    <p>I'm an awesome User!</p>
    <button type="button" name="button" @click='changeName'>Change Name</button>
    <p>myName is {{ myName }}.</p>
    <p>myAge is {{ myAge }}.</p>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <app-user-detail
          myName="myName"
          ></app-user-detail>
        <!-- whatever "myName" without ":" passes ends up being a mere string, not a dynamic property -->
        <hr>
        <app-user-detail
          :myName="myName"
          :myAge="myAge"
          @myNameIsReset="myName = $event"
          :resetNameParentFunction="resetName"
          ></app-user-detail>
        <!-- "myName" with ":" (v-bind) passes a dynamic property -->
        <!-- the names of the properties passed to the child component need to match the names of the properties in the child component’s props -->
        <!-- the parent component listens to the custom event emitted by the child component through the event listener "@myNameIsReset" -->
        <!-- "$event" refers to the data emitted by the child component -->
        <!-- "resetFunction" passes the method "resetName" as a prop to the child component -->
      </div>
      <div class="col-xs-12 col-sm-6">
        <app-user-edit
          :myAge="myAge"
          @myAgeIsEdited="myAge = $event"
          ></app-user-edit>
      </div>
    </div>
  </div>
</template>

<script>
import UserDetail from './UserDetail.vue';
import UserEdit from './UserEdit.vue';

export default {
  data: function() {
    return {
      myName: 'Andrea',
      myAge: 100,
    };
  },
  methods: {
    changeName() {
      this.myName = 'Luca';
    },
    resetName() {
      this.myName = 'Andrea';
      // eslint-disable-next-line
      console.log('The method "resetName" of the parent component is executed.');
    },
    // method to be passed as a callback function to the child component
  },
  components: {
    appUserDetail: UserDetail,
    appUserEdit: UserEdit
  }
}
</script>

<style scoped>
div {
  background-color: lightblue;
}
</style>
