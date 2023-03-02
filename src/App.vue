<template>
   <NavBar/>
  <router-view/>
   <FooterNote/>
</template>

<script>
import NavBar from "./components/NavBar.vue"
import FooterNote from "./components/FooterNote.vue"
export default {
  
  name: 'App',
  components: {
    NavBar, 
    FooterNote
  }
}
</script>


<style>

</style>

