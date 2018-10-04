<template>
  <div class="row mt-3">
    <div class="col-4 mt-2" v-for="(val, index) in quotes">
      <div class="quote" @click="deleteQuote(index)">
        {{ val }}
      </div>
    </div>
  </div>
</template>

<script>
  import EventBus from '../EventBus';

  export default {
    name: "QuotesList",
    data() {
      return {
        quotes: []
      }
    },
    mounted() {
      this.quotes = EventBus.quotes;
      EventBus.$on('quotesUpdated', (quotesList) => this.quotes = quotesList);
    },
    methods: {
      deleteQuote(i) {
        EventBus.deleteQuote(i);
      }
    }
  }
</script>

<style lang="scss">
  .quote {
    font-family: 'Charmonman', cursive;
    font-size: 1.6rem;
    border: 1px solid silver;

    &:hover {
      cursor: pointer;
      background: rgba(210, 105, 30, 0.3);
    }
  }
</style>
