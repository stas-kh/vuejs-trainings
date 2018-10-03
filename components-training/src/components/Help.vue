<template>
	<div class="row">
    <div class="col">
      <pre>
        <code>
        import Vue from 'vue'
        import App from './App.vue'

        new Vue({
          el: '#app',
          render: h => h(App)
        })
      </code>
      </pre>
    </div>
    <div class="col">
      <div class="row">
        <div class="col-4">
          <img class="w-100" src="https://static.thenounproject.com/png/61692-200.png" />
        </div>
        <div class="col-8">
          <p>This website is operated by VueJS engine and whose registered address is <a href="https://vuejs.org">vuejs.org</a></p>
          <p>(“We”) are committed to protecting and preserving the privacy of our visitors when visiting our site or communicating electronically with us</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
    }
</script>

<style scoped>
  p {
    font-size: 12px;
  }

  pre {
    text-align: left;
  }
</style>
