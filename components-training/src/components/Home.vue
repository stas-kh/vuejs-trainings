<template>
  <div>
    <h1>Home component</h1>
    <h2>{{ message }}</h2>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data() {
      return {
        message: 'Hi there!'
      }
    }
  }
</script>

<style lang="scss" scoped>
  h1 {
    color: red;

  + h2 {
    color: mediumslateblue;
  }

  }
</style>
