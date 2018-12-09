<template>
  <div class="container">

    <form>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>File a Complaint</h1>
          <hr>
          <div class="form-group">
            <label for="email">Mail</label>
            <!--<input
              type="text"
              id="email"
              class="form-control"
              v-model="userData.email">-->
            <!-- use "v-model" to set a two-way binding -->
            <input
              type="text"
              id="email"
              class="form-control"
              :value="userData.email"
              @input="userData.email = $event.target.value">
            <!-- "v-model" combines the above ":value" and "@input" -->
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              class="form-control"
              v-model.lazy="userData.password">
            <!-- add the modifier "lazy" to update the property only when the focus changes, and not on each keystroke -->
            <!-- add modifiers to "v-model" to control when to react as well as the format of the input -->
          </div>
          <div class="form-group">
            <label for="age">Age</label>
            <input
              type="number"
              id="age"
              class="form-control"
              v-model="userData.age">
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="message">Message</label><br>
          <textarea
            id="message"
            rows="5"
            class="form-control"
            v-model="message"
          ></textarea>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <div class="form-group">
            <label for="sendmail">
              <input
                type="checkbox"
                id="sendmail"
                value="SendMail"
                v-model="sendMail"> Send Mail
            </label>
            <label for="sendInfomail">
              <input
                type="checkbox"
                id="sendInfomail"
                value="SendInfoMail"
                v-model="sendMail"> Send Infomail
            </label>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="male">
            <input
              type="radio"
              id="male"
              value="Male"
              v-model="gender"> Male
          </label>
          <label for="female">
            <input
              type="radio"
              id="female"
              value="Female"
              v-model="gender"> Female
          </label>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
          <label for="priority">Priority</label>
          <select
            id="priority"
            class="form-control"
            v-model="selectedPriority">
            <option
              v-for="priority in priorities"
              :selected="priority == 'Medium'">{{ priority }}</option>
          </select>
          <!-- the property binded through v-model, if defined, overrides the one defined through ":selected" -->
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <switcher v-model="switchState"></switcher>
        </div>
      </div>

      <hr>

      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <button
            class="btn btn-primary"
            @click.prevent="submit">Submit!
          </button>
          <!-- user the modifier "prevent" to prevent the button from submitting the form on press -->
        </div>
      </div>
    </form>

    <hr>

    <div class="row" v-if="isSubmitted">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Mail: <strong>{{ userData.email }}</strong></p>
            <p>Password: <strong>{{ userData.password }}</strong></p>
            <p>Age: <strong>{{ userData.age }}</strong></p>
            <p style="white-space: pre;">Message: <strong>{{ message }}</strong></p>
            <p><strong>Send Mail?</strong></p>
            <ul>
              <li v-for="option in sendMail">{{ option }}</li>
            </ul>
            <p>Gender: <strong>{{ gender }}</strong></p>
            <p>Priority: <strong>{{ selectedPriority }}</strong></p>
            <p>Switched: <strong>{{ switchState }}</strong></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Switch from './components/Switch.vue'

export default {
  data() {
    return {
      userData: {
        email: '',
        password: '',
        age: 100
      },
      message: 'This is a placeholder text.',
      sendMail: [],
      gender: '',
      priorities: ['High', 'Medium', 'Low'],
      selectedPriority: 'Medium',
      switchState: true,
      isSubmitted: false
    }
  },
  methods: {
    submit() {
      this.isSubmitted = true;
    }
  },
  components: {
    switcher: Switch
  }
}
</script>

<style>

</style>
