<template>
    <div class="main_div">
     <productCard/>
    </div>
</template>

<script>
import productCard from "../components/productCard.vue"

    export default {
        components: {
            productCard
        }
    }
</script>

<style scoped>

.main_div {
    width: 100%;
    height: 550vh;
    background: linear-gradient(to right, white, #E6CCB2, #755539, pink);
}





</style>