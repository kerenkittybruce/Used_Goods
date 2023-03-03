<template>
    <div class="main_div">
      <div v-if="spinner">
         <SpinnerComponent/>      
      </div>
        <div v-else class="container text-center">
          <div class="row">
            <div class="col">
              <img :src="product.imgURL" alt="">
            </div>
            <div class="col">
              <h2>{{ product.prodName }}</h2>
              <h5>{{ product.price }}</h5>
              <br><br>
              {{ product.prodDescription }}
              ---------------------------------
              <h5>{{ product.category }}</h5>
              ---------------------------------
            </div>
            <router-link to="/products"><a class="btn btn-transparent text-light border-dark">Explore</a></router-link>

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

  setup() {
    const store = useStore();
    
    const product =
      computed(() => store.state.product)
    const spinner =
      computed(() => store.getters.spinnerStatus);
    return {
      product,
      spinner
    }
  },
  mounted() {
    this.$store.dispatch("fetchSingleProduct", this.$route.params.id);
  }


    }
</script>

<style scoped>
.main_div {
  width: 100%;
  height: 100vh;
}
</style>