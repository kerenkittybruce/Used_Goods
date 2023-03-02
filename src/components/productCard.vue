<template>
    <div>
       <div v-if="spinner">
       <SpinnerComponent/>
      </div>
        <div v-else v-for="id in products" :key="id" class="p-2 m-5 mx-auto loop" data-aos="zoom-in" data-aos-duration="3000">

      <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img :src="id.imgURL" class="img-fluid rounded-start h-100" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title" data-aos="zoom-in" data-aos-duration="2000">{{ id.prodName }}</h5>
        <p class="card-text" data-aos="zoom-in" data-aos-duration="2000">{{ id.prodDescription }}</p>
        <p class="card-text" data-aos="fade-right" data-aos-duration="3000"><small class="text-muted">{{ id.price }}</small></p>
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
</style>