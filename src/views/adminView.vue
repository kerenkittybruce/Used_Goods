<template>
    <div class="main_div">
  <br> <br> <br><br><br><br>
  <div class="container">
    <div class="row my-2">
      <div class="col-md">
        <router-link to="/register">
          <button class="btn bg-transparent border-dark text-dark fw-bold">Add New User</button>
        </router-link>
      </div>
      <div class="col-md">
        
    <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-dark" type="submit">Search</button>
      </form>
      </div>
    </div> 
    
    <h2 class="title">User</h2>
    <div class="row table-responsive-md">
    
      <table class="table table-hover">
        <thead class="bg-gradient">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Firstname</th>
            <th scope="col">Lastname</th>
            <th scope="col">Gender</th>
            <th scope="col">Join-Date</th>
            <th scope="col">Number</th>
            <th scope="col">User role</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          <SpinnerComponent v-if="spinner"/>
          <tr v-else v-for="userID in users" :key="userID">
            <td data-title="ID" class="text-white">{{userID.userID}}</td>
            <td data-title="Firstname" class="text-white">{{userID.firstName}}</td>
            <td data-title="Lastname" class="text-white">{{userID.lastName}}</td>
            <td data-title="Gender" class="text-white">{{userID.gender}}</td>
            <td data-title="Join-Date" class="text-white">{{userID.joinDate}}</td>
            <td data-title="CellPhone Number" class="text-white">{{userID.cellphoneNumber}}</td>
            <td data-title="User Role" class="text-white">{{userID.userRole}}</td>
            <td data-title="Email" class="text-white">{{userID.emailAdd}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <h2 class="title">Product</h2>
    <div class="row table-responsive-md">
      <table class="table table-hover">
        <thead class="bg-gradient">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Image</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          <SpinnerComponent v-if="spinner"/>
          <tr v-else v-for="id in products" :key="id">
            <td data-title="id" class="text-white">{{id.id}}</td>
            <td data-title="Name" class="text-white">{{id.prodName}}</td>
            <td data-title="Image" class="text-white">
              <img class="" :src="id.imgURL"/>
            </td>
            <td data-title="Quantity" class="text-white">{{id.prodQuantity}}</td>
            <td data-title="Price" class="text-white">R {{id.price}}</td>          </tr>
        </tbody>
      </table>      
    </div>

  </div>
    </div>
</template>

<script>

import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex';
import SpinnerComponent from "../components/SpinnerComponent.vue"
    export default {
      components: {
        SpinnerComponent
      },
        setup(){
    const store = useStore();
      store.dispatch("fetchUsers");
      store.dispatch("fetchProducts");
      const users =
      computed( () => store.state.users);
      const products = 
      computed( () => store.state.products)
      return{
        users,
        products
      }
  }
    }
</script>

<style scoped>

.main_div {
    width: 100%;
    height: 270vh;
    background: linear-gradient(to bottom right, white, #9C6644, #7F5539, pink);
}
img {
  width: 70px;
  height: 70px;
}

.title {
  color: white;
}

button:hover {
  background: linear-gradient(to bottom right, #E6CCB2, pink);

}
</style>