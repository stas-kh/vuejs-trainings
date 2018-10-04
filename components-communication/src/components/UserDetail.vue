<template>
  <div>
    <div class="component">
      <h3>You may view the User Details here</h3>
      <p>Many Details</p>
    </div>

    <div>{{ switchName }}</div>

    <button @click="changeName">Change name</button>
  </div>
</template>

<script>
  export default {
    props: {
      userName: {
        type: String,
        required: true
      }
    },
    computed: {
      switchName() {
        return this.userName.split('').reverse().join('+');
      }
    },
    methods: {
      changeName() {
        this.$emit('newName', 'the new name');
      }
    }
  }
</script>

<style scoped>
  div {
    background-color: lightcoral;
  }
</style>
