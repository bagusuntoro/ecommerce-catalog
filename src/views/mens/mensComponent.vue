<template>
  <div>
    <div class="row">
      <div class="col-md-4">
        <img class="mt-5" alt="d" :src="stores.image" width="300" />
      </div>
      <div class="col-md-8 pe-5">
        <h3 class="pt-5 customHeader text-start">{{ stores.title }}</h3>
        <p class="pt-4 text-start">men's clothing</p>
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
          <div class="col-md-4">
            
          </div>
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
      next: 1,
      loading: false
    };
  },

  async mounted() {
    // this.next++;
    const response = axios.get(
      `https://fakestoreapi.com/products/` + this.next
    );
    // console.log((await response).data)
    this.stores = (await response).data;
  },

  methods: {
    async incrementData() {
      this.next++;

      const response = axios.get(
        `https://fakestoreapi.com/products/` + this.next
      );
      // console.log((await response).data)
      if ((await response).data.category == "men's clothing") {
        this.stores = (await response).data;
      } else {
        this.next=1;
        alert("This is last product for mens");
      }
      console.log(this.next);
    },
    loadingData(){
      this.loading=!false
      setTimeout(()=>{
        this.loading=!true
      },1000)
    }
  },
};
</script>

<style scoped>
.customHeader,
h5 {
  color: #002772;
}

.customText,
h5 {
  text-align: left;
}

button {
  width: 259px;
}

button.customBuy {
  background-color: #002772;
  color: #ffffff;
}

button.customNext {
  border-color: #002772;
  float: left;
}

</style>
