<template>
  <div>
    <!-- bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <nav>
      <router-link to="/">Mens clothes</router-link> |
      <router-link to="/womens">Womens clothes</router-link>
    </nav>

    <div class="template">
      <!-- <router-view/> -->
      <womens-component/>
    </div>
  </div>
</template>



<script>
import WomensComponent from './WomensComponent.vue'
// import Mens from './ParentWomens.vue'
export default {
  components: { WomensComponent },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #202020;
  

  /* custom */
  background-image: linear-gradient(#FDE2FF 90%, #ffffff );
  /* margin: -8px -8px -8px -8px ; */
  padding: 0;
  height: 500px;
  
}

.template{
  width: 70%;
  min-height: 500px;
  margin: auto;
  background-color: #FFFFFF;
  border-radius: 10px;
  box-shadow: 5px 5px 5px #c4c4c4;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #222222;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #720060;
  text-decoration: none;
}
</style>
