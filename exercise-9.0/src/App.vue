<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <!--<quotation quotationBody="This is a quotation."></quotation>-->
        <quotation>
          <h1 slot="head">{{ quotationHead }}</h1>
          <p slot="body">{{ quotationBody }}</p>
          <!-- the above content is rendered in place of the tag "<slot>" in the component -->
        </quotation>
      </div>
    </div>
  </div>
</template>

<script>
import Quotation from './components/Quotation.vue';

export default {
  data() {
    return {
      quotationHead: 'Quotation',
      quotationBody: 'This is a quotation.'
    }
  },
  components: {
    quotation: Quotation
  }
}
</script>

<style>
</style>
