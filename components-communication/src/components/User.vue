<template>
  <div class="row">
    <div class="col">
      <h1>The User Component</h1>
      <p>{{ userName }}</p>
      <button @click="userName = 'Stan'">Change Name</button>
      <hr>
      <div class="row">
        <div class="col-xs-12 col-sm-6">
          <app-user-detail :user-name="userName" @newName="userName = $event"></app-user-detail>
        </div>
        <div class="col-xs-12 col-sm-6">
          <app-user-edit></app-user-edit>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import UserDetail from './UserDetail.vue';
  import UserEdit from './UserEdit.vue';

  export default {
    data() {
      return {
        userName: 'Stas Kh'
      }
    },
    components: {
      appUserDetail: UserDetail,
      appUserEdit: UserEdit
    }
  }
</script>

<style scoped>
  div {
    background-color: lightblue;
  }
</style>
