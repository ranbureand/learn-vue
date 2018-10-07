<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <button type="button" name="button" @click="selectedComponent = 'quotation'">Quotation</button>
        <button type="button" name="button" @click="selectedComponent = 'author'">Author</button>
        <button type="button" name="button" @click="selectedComponent = 'newQuotation'">New Quotation</button>
        <p>{{ selectedComponent }}</p>
        <hr>
        <keep-alive>
          <component :is="selectedComponent"></component>
        </keep-alive>
        <!-- "keep-alive" makes sure that the component is not destroyed -->
      </div>
    </div>
  </div>
</template>

<script>
import Quotation from './components/Quotation.vue';
import Author from './components/Author.vue';
import NewQuotation from './components/NewQuotation.vue';

export default {
  data() {
    return {
      quotationHead: 'The Neverending Story',
      quotationBody: 'They look like good, strong hands.',
      quotationSource: 'Michael Ende',
      selectedComponent: 'quotation'
    }
  },
  components: {
    quotation: Quotation,
    author: Author,
    newQuotation: NewQuotation
  }
}
</script>

<style>
</style>
