<template>
  <div class="row">
    <div class="col">
      <div class="progress">
        <div class="progress-bar" role="progressbar" :style="progressStyles" aria-valuenow="25"
             aria-valuemin="0" aria-valuemax="100">{{ quotesCount }} / 10
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import EventBus from '../EventBus';

  export default {
    name: "QuotesProgress",
    data() {
      return {
        quotes: []
      }
    },
    computed: {
      quotesCount() {
        return this.quotes.length;
      },
      progressStyles() {
        return {
          width: `${this.quotesCount * 10}%`
        }
      }
    },
    mounted() {
      this.quotes = EventBus.quotes;

      EventBus.$on('quotesUpdated', (quotesList) => this.quotes = quotesList);
    }
  }
</script>

<style scoped>

</style>
