<template>
<!-- <div>
    <h2>fskbgkhsbgbsjkfd</h2>
    <img src="../assets/Images/peep3-fococlipping-standard.png" alt="" class="my-5 opacity-75">
</div> -->
<div >
    <div class="main_container mb-5">

<div class="d-flex justify-content-between">
   <div class="position-absolute top-50 start-50">
    <div >
        <h1><i>Used Goods</i></h1>
    </div>
   <div>
        <p>Like Yourself...</p>
        <p>A collection of high-end second hand goods. Including a first time customer discount. </p>
   </div>
     
   <router-link to="/products"><a class="btn btn-transparent text-light border-dark">Explore</a></router-link>

   </div>
   <div>
    <img src="../assets/Images/peep3-fococlipping-standard.png" alt="">
   </div>
</div>

</div>

</div>


</template>

<script>
    export default {
      components: {

      }
    }
</script>

<style scoped>

.main_container {
 height: 100vh;
 margin: 130px 20px 0 20px;
 background: linear-gradient(to bottom right, #E6CCB2, #755539, pink);
 border-radius: 30px;
   
}

img {
   
    height: 100vh;
}

.div1 {
    margin-left: 50px;
}

a {
    background: transparent;
    /* padding: 10px 40px 10px 40px; */
    
}

a:hover {
    background-color: #B08968;
}

</style>