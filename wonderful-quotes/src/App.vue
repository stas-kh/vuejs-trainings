<template>
  <div id="app" class="container">
    <quotes-progress></quotes-progress>
    <new-quote></new-quote>
    <quotes-list></quotes-list>

    <div class="row mt-3">
      <div class="col">
        <div class="alert alert-primary" role="alert">
          To delete a quote just click on it!
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import QuotesProgress from './components/QuotesProgress';
  import NewQuote from './components/NewQuote';
  import QuotesList from "./components/QuotesList";

  export default {
    name: 'app',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      QuotesList,
      QuotesProgress,
      NewQuote
    }
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Charmonman');

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
