<template>
    <div class="master">
      <div class="main_container">
        
        <div class="position-absolute top-50 start-50 translate-middle main">
            <div class="container text-center">
  <div class="row">
    <div class="col left-side">
      <h5 class="text-start mt-5"><i>Used_Goods</i></h5>
      <br>
      <br>
      <br>
      <p>Welcome Back</p>
      <p>Please login to your Account.</p>
      <div>
        <div class="container text-center">
  <div class="row">
    <div class="col">
      <button class="bg-transparent pt-2 pb-2"><i class="fa-brands fa-google google text-dark"></i>  Sign In with Google</button> <br> 

      <h5><i>Or</i></h5>
    </div>
    
        <form class="form">
              <div class="row">
                <input class="form-control mb-2" name="email" id="email"
                v-model="email" type="email" placeholder="Enter your email" required/>
              </div>
              <div class="row">
                <input class="form-control mb-4" name="userpassword" id="userpassword"
                v-model="userpassword" type="password" placeholder="Enter your password" required/>
              </div>
              <div class="row">
                <div class="btn btn-transparent border-dark login">Login</div>
              </div>
          </form>

   
  </div>
</div>
      </div>
    </div>
    <div class="col right-side">
      <img src="../assets/Images/mew-fococlipping-standard.png" class="opacity-75" alt="">
    </div>
  </div>
</div>
        </div>

      </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.left-side {
    /* background: linear-gradient(to bottom right, #9C6644, #7F5539, #B08968, #DDB892, #E6CCB2, #EDE0D4, pink); */
    background: ;
    width: 500px;
}
.right-side {
    /* background: #9C6644; */
}
.login:hover {
   background: linear-gradient(to right, #9C6644, white,  pink, burlywood);
   border: none;
   font-style: italic;
   font-weight: bold;
}

.master {
    width: 100%;
    height: 120vh;
    background: linear-gradient(to right, #9C6644, #7F5539, #B08968, #DDB892, #E6CCB2,  #9C6644 50.8%);
}
.main {
    box-shadow: 0px 0 19px rgba(6, 0, 0, 0.8);
    width: 60%;
    margin-top: 80px;

}
</style>