<template>
  <div class="row justify-content-center mt-3">
    <div class="col-6 mt-3">
      <h3>Quote</h3>

      <div class="form-group">
        <textarea class="form-control" name="quote-textarea" cols="30" rows="10"
                  placeholder="Type a new quote here..." v-model="quoteText"></textarea>
      </div>

      <button class="btn btn-primary" @click="addNewQuote">Add Quote</button>
    </div>
  </div>
</template>

<script>
  import EventBus from '../EventBus';

  export default {
    name: "NewQuote",
    data() {
      return {
        quoteText: '',
        quotesCount: 0,
        maxQuotes: 10
      }
    },
    methods: {
      addNewQuote() {
        if (this.quotesCount >= this.maxQuotes) {
          alert('Maximum amount of quotes is reached out!');
          return;
        }

        EventBus.addNewQuote(this.quoteText);
        this.quoteText = '';
      }
    },
    created() {
      this.quotesCount = EventBus.quotes.length;
      EventBus.$on('quotesUpdated', (quotesList) => this.quotesCount = quotesList.length);
    }
  }
</script>

<style scoped>
</style>
