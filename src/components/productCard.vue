<template>
    <div class="">
      <br> <br><br><br><br>
      <div class="container">
    <div class="row my-2">
      <div class="col-md col-4">
           <button class="form-control btn btn-transparent border-dark sortBtn text-center m-auto d-flex " @click="SortByPrice">Price<i class="bi bi-arrow-down-up ps-4`"></i></button><br>

      </div>
      <div class="col-md">
        
    <form class="d-flex" role="search">
        <input class="form-control me-2 bg-transparent border-dark" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-dark bg-transparent Submit" type="submit">Search</button>
      </form>
      </div>
    </div>
       <div v-if="spinner">
       <SpinnerComponent/>
      </div>
        <div v-else v-for="id in products" :key="id" class="p-2 m-5 mx-auto loop" data-aos="zoom-in" data-aos-duration="3000">
          <br><br>
<div class="container text-center">
  <div class="row">
    <div class="col-4">
                <div class="container text-center">
  <div class="row">
    <div class="col">
      <div class="card bg-transparent" style="width: 18rem;">
  <img :src="id.imgURL" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{ id.prodName }}</h5>
    <h5 class="card-title">{{ id.category }}</h5>
    <p class="card-text">{{id.prodDescription }}</p>
    <router-link :to="{name: 'product', params: {id: id.id}}"><a class="btn btn-dark">View Product</a></router-link>
  </div>
</div>
    </div>
  </div>
</div>
    </div>
  </div>
</div>
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
      methods: {
          SortByPrice(){
            this.$store.commit("SortProductsByPrice");
          }
        },
        setup(){
    const store = useStore();
      store.dispatch("fetchProducts");
      const products =
      computed( () => store.state.products)
      const spinner = 
      computed(() => store.getters.spinnerStatus);
      return{
        products,
        spinner
      }
  }


    }
</script>

<style scoped>

.loop {
  display: inline-block;
}

input::placeholder{
  color: black;
}

.Submit:hover {
  background: linear-gradient(to bottom right, #E6CCB2, #755539, pink);

}
</style>