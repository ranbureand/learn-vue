<template>
  <div class="container">
    <form v-if="!isSubmitted">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <!-- Exercise 1 -->
          <!-- Create a Signup Form where you retrieve the following Information -->
          <!-- Full Name (First Name + Last Name) -->
          <!-- Mail -->
          <!-- Password -->
          <!-- Store Data? Yes/No -->

          <fullName v-model="user.fullname"></fullName>

          <div class="form-group">
            <label for="email">Mail</label>
            <input
              type="text"
              id="email"
              class="form-control"
              v-model="user.email">
          </div>

          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              class="form-control"
              v-model.lazy="user.password">
          </div>

          <div class="form-group">
            <label for="saved">
              <input
                type="radio"
                id="yes"
                value="Yes"
                v-model="storeData">Yes
            </label>
            <label for="not-saved">
              <input
                type="radio"
                id="no"
                value="No"
                v-model="storeData">No
            </label>
          </div>

          <!-- Exercise 2 -->
          <!-- Only display the Form if it has NOT been submitted -->
          <!-- Display the Data Summary ONCE the Form HAS been submitted -->

          <div class="form-group">
            <button
              class="btn btn-primary"
              @click.prevent="submit">Submit!
            </button>
          </div>

          <!-- Exercise 3 -->
          <!-- Edit the Example from above and create a custom "Full Name" Control -->
          <!-- which still holds the First Name and Last Name Input Field -->
        </div>
      </div>
    </form>

    <div class="row" v-if="isSubmitted">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Full Name: <strong>{{ user.fullname }}</strong></p>
            <p>Mail: <strong>{{ user.email }}</strong></p>
            <p>Password: <strong>{{ user.password }}</strong></p>
            <p>Saved in Database: <strong>{{ storeData }}</strong></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FullName from './components/FullName.vue'

export default {
  data() {
    return {
      user: {
        fullname: 'Salta Lungo',
        email: '',
        password: '',
      },
      storeData: 'Yes',
      isSubmitted: false
    }
  },
  methods: {
    submit() {
      this.isSubmitted = true;
    }
  },
  components: {
    fullName: FullName
  }
}
</script>

<style>
</style>
