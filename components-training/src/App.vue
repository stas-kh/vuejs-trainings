<template>
  <div id="app" class="container">
    <app-home></app-home>
    <app-help></app-help>
  </div>
</template>

<script>
  import Home from './components/Home';
  import Help from './components/Help';

  export default {
    name: 'app',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      'app-home': Home,
      'app-help': Help
    }
  }
</script>

<style scoped lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 30px;
  }
</style>
