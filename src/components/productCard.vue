<template>
    <div class="">
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
</style>