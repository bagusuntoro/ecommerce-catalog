<template>
  <div>
    <div class="row">
      <div class="col-md-4">
        <img class="mt-5" alt="women's clothing" :src="stores.image" width="300" />
      </div>
      <div class="col-md-8 pe-5">
        <h3 class="pt-5 text-start customHeader">{{ stores.title }}</h3>
        <p class="pt-4 text-start">women's clothing</p>
        <hr />
        <p class="customText">{{ stores.description }}</p>
        <br />
        <hr />
        <h5>{{ stores.price }}</h5>

        <!-- buttons -->
        <div class="row">
          <div class="col-md-4">
            <button class="customBuy">Buy now</button>
          </div>
          <div class="col-md-4">
            <div class="col-md-4">
            <!-- <a href=""> -->
            <button
              class="customNext"
              id="next"
              @click="
                incrementData();
                loadingData();
              "
            >
            <div v-if="loading" class="spinner-border spinner-border-sm" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
              
              Next product
            </button>
            <!-- </a> -->
          </div>
          </div>
          <div class="com-md-4"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      stores: [],
      next: 15,
      loading: false
    };
  },

  async mounted() {
    // this.next++;
    const response = axios.get(
      `https://fakestoreapi.com/products/` + this.next
    );
    this.stores = (await response).data;
  },

  methods: {
    async incrementData() {
      this.next++;

      const response = axios.get(
        `https://fakestoreapi.com/products/` + this.next
      );
      if ((await response).data.category == "women's clothing") {
        this.stores = (await response).data;
      }else{
        this.next=15;
        alert("This is last product for womens")
      }
      // console.log(this.next);
    },
    loadingData(){
      this.loading=!false
      setTimeout(()=>{
        this.loading=!true
      },1000)
    }
  },
  // incrementData(next){
  //   const response = axios.get(`https://fakestoreapi.com/products/`+this.next)
  //   console.log((response).data)
  //   this.stores = (response).data
  // }
};
</script>

<style scoped>
.customHeader,
h5 {
  color: #720060;
}
.customText,
h5 {
  text-align: left;
}

button {
  width: 259px;
}

button.customBuy {
  background-color: #720060;
  color: #ffffff;
}

button.customNext {
  border-color: #720060;
  float: left;
}
</style>
