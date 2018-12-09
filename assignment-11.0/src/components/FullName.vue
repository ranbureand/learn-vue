<template lang="html">
  <div>
    <div class="form-group">
      <label for="name">Name</label>
      <input
        type="text"
        id="name"
        class="form-control"
        :value="name"
        @input="inputFullname('name', $event)">
    </div>
    <div class="form-group">
      <label for="surname">Surname</label>
      <input
        type="text"
        id="surname"
        class="form-control"
        :value="surname"
        @input="inputFullname('surname', $event)">
      </div>
  </div>
</template>

<script>
export default {
  props: ['value'],
  methods: {
    inputFullname(field, event) {
      var fullname = '';
      if (field == 'name') {
        fullname = event.target.value + ' ' + this.surname;
      } else if (field == 'surname') {
        fullname = this.name + ' ' + event.target.value;
      }
      this.value = fullname;
      this.$emit('input', this.value);
    }
  },
  computed: {
    name() {
      return this.value.split(" ")[0];
    },
    surname() {
      return this.value.split(" ")[1];
    }
  }
}
</script>

<style lang="css">
</style>
