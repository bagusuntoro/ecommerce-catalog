<template>
  <div>

    <nav>
      <router-link to="/">Mens clothes</router-link> |
      <router-link to="/womens">Womens clothes</router-link>
    </nav>

    <div class="template">
      <router-view/>
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {
      navbarColors: {
        '/': 'red',
        '/about': 'blue',
      },
    }
  },
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
  background-image: linear-gradient(#fc9aff, #ffffff );
  margin: -8px -8px -8px -8px ;
  padding: 0;
  height: 500px;
  
}

.template{
  width: 70%;
  height: 500px;
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
  color: #2b08f7;
  text-decoration: none;
}
</style>
