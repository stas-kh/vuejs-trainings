<template>
  <div id="app">
    <div class="container">
      <app-quote>
        <h2>The quote is here</h2>
      </app-quote>
    </div>
  </div>
</template>

<script>
  import Quote from './components/Quote';

  export default {
    name: 'app',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      appQuote: Quote
    }
  }
</script>

<style scoped>
  .container {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h2 {
    color: red;
  }
</style>
