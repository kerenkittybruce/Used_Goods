<template>

    <div class="main_div">
        <br><br><br><br><br><br><br>
        <div class="container bg-transparent border p-5">
    <div class="row">
        <fieldset>
            <form class="form container" method="POST" @submit.prevent="signUp">
                <div class="row">
                    <input class="form-control bg-transparent fw-bold" v-model="firstname" type="text" 
                    placeholder="Enter your firstname" required/>
                </div>
                <div class="row my-3">
                    <input class="form-control bg-transparent fw-bold" v-model="lastname" type="text" 
                    placeholder="Enter your surname" required/>
                </div>
                <div class="row">
                    <label class="form-label bg-gradient fw-bold opacity-75">Gender: </label>
                    <div>
                        <span class="fw-bold opacity-75">Male</span>
                        <input type="radio" name="gender" v-model="gender" value="Male"/>
                        <span class="fw-bold opacity-75">Female </span>
                        <input type="radio" name="gender" v-model="gender" value="Female"/>
                    </div>
                </div>
                <br><br>
                <div class="row">
                    <textarea class="form-control bg-transparent fw-bold" 
                    v-model="address"
                    placeholder="Enter your address"></textarea>
                </div>
                <div class="row my-3">
                    <input class="form-control bg-transparent fw-bold" v-model="userRole" type="text" 
                    placeholder="Enter your role" />
                </div>
                <div class="row my-3">
                    <input class="form-control bg-transparent fw-bold" v-model="email" type="email" 
                    placeholder="Enter your email"/>
                </div>
                <div class="row">
                    <input class="form-control bg-transparent fw-bold" v-model="userpassword" type="password" 
                    placeholder="Enter your password" required/>
                </div>
                <div class="row my-3">
                    <button class="btn btn-transparent border fw-bold">Register</button>
                </div>
            </form>
        </fieldset>
        <p>Have An Account?</p>
        <p>Please proceed to the Login Page.</p>
    </div>
  </div>
    </div>
</template>

<script>
</script>

<style scoped>

.main_div {
    width: 100%;
    height: 150vh;
    background: linear-gradient(to right, #9C6644, #7F5539, #B08968, #DDB892, #E6CCB2,  #9C6644 50.8%);

}

.container {
    width: 70%;
}

button:hover {
    background: linear-gradient(to right, #9C6644, white,  pink, burlywood);
    color: black;
}
</style>