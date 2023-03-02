<template>
    <div class="background container-fluid">
    
        <div class="position-absolute top-50 start-50 translate-middle main">

            <div class="container">
  <div class="row">
    <div class="col left-side ">
      
    <div class="text-contain text-center">
      <h5>Address</h5>
      <p class="fw-bold">314 Imam Haron Road, Lansdowne, <br/>Cape Town</p>
    <h5>Contact #</h5>
    <p class="fw-bold">+27736164107</p>
    <h5>Email Contact</h5>
    <p class="fw-bold">used_goods@gmail.com</p>
    </div>
    </div>
    <div class="col right-side">
      <h5 class=" mt-5 text-center"><i>Send Us A Message</i></h5>
      <form action="https://formspree.io/f/mrgvbgjz" method="POST" class="mt-5">
  <!-- 2 column grid layout with text inputs for the first and last names -->

  <div class="row mb-4 container">
    <div class="col-6">
      <div class="form-outline">
        <label class="form-label" for="form3Example1">First name</label>
        <input type="text" class="form-control bg-transparent" placeholder="FirstName" required/>
        
      </div>
    </div>
    <div class="col-6">
      <div class="form-outline">
        <label class="form-label" for="form3Example2">Last name</label>

        <input type="text" class="form-control bg-transparent" placeholder="LastName" required/>
      </div>
    </div>

    <div class="col-12">
     <label for="number" class="form-label">Cellphone number:</label>
               <input type="text" name="name" class="form-control bg-transparent" placeholder="Cellphone number" aria-label="Cellphone number" required>
    </div>
    <div class="col-12">
      <div class="form-outline">
       <label for="email" class="form-label">Email address:</label>
               <input type="email" name="email" class="form-control bg-transparent"  placeholder="name@example.com" required>
      </div>
    <div class="col-12">
      <div class="form-outline">
       <label for="email" class="form-label text-start">Message:</label>
               <input type="text" name="message" class="form-control bg-transparent text-start" placeholder="Message" required>
      </div>
  
 
    <div class="col-12">
    <button type="submit" class="btn btn-light submit bg-transparent ps-4 pe-4">Submit</button>
   
      </div> 

    
     </div>
    </div>
  </div>
</form>
    </div>
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

.left-side {
  
width: 900px;
height: 80vh;
background: #7F5539;
}

.right-side {

width: 900px;
height: 80vh;
background: #9c6644
}

.background {
    background: linear-gradient(to bottom right, #EDE0D4, #E6CCB2, pink, #DDB892);
    width: 100%;
    height: 120vh;
}

.main {
    margin-top: 100px;
}

.text-contain {
    margin-top: 160px;
}

h5 {
    color: pink;
}

.form {
    margin-top: 10px;
}


.submit {
   color: pink;
   margin-left: 140px;
   margin-top: 30px;
}
.submit:hover {
    background: linear-gradient(to bottom right, #E6CCB2, #755539, pink);
}

input::placeholder {
    color: pink;
}

</style>