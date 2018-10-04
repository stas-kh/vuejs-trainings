<script>
  import Vue from 'vue';

  export default new Vue({
    data: {
      quotes: ['test']
    },
    methods: {
      addNewQuote(newQuote) {
        this.quotes.push(newQuote);
        this.notify();
      },
      deleteQuote(index) {
        this.quotes.splice(index, 1);
        this.notify();
      },
      notify() {
        this.$emit('quotesUpdated', this.quotes);
      }
    }
  });
</script>
