<template>
    <div class="main_div">
        <div class="container">
    <h2 class="text-dark">Container</h2>
  </div>
  <br><br><br><br><br>
  <div class="row">
    <table class="table">
      <tbody>
        <tr v-for="userID in users" :key="userID">
          <!-- <td class="text-dark p-5">{{ userS.firstName }}</td>
          <td class="text-dark p-5">{{ users.lastName }}</td>
          <td class="text-dark p-5">{{ users.userprofile}}</td> -->
          <td class= "text-dark fw-bold">{{ userID.userID }}</td>
            <td><img id="admin_img" class="bg-body rounded" :src="userID.imgURL"></td>
            <td class= "text-dark fw-bold">{{ userID.firstName }}</td>
            <td class= "text-dark fw-bold">{{ userID.lastName }}</td>
            <td><button class="bg-transparent">Edit</button><i class="fas fa-edit"></i>
            <button id="del" class="bg-transparent">Delete</button>
            <i class="fa fa-trash" aria-hidden="true"></i>
            </td>
        </tr>
      </tbody>
    </table>
  </div>
    </div>
</template>

<script>

import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex';
    export default {
        setup(){
    const store = useStore();
      store.dispatch("fetchUsers");
      const users =
      computed( () => store.state.users);
      return{
        users
      }
  }
    }
</script>

<style scoped>

.main_div {
    width: 100%;
    height: 100vh;
    background: linear-gradient(to right, #9C6644, #7F5539);
}
</style>