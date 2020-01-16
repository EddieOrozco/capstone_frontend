<template>
  <div class="CarsShow">
    {{ message }}
    <h2>This is my Cars list boom!!!</h2>
    <h3>Make: {{ car.make }}</h3>
    <h3>Model: {{ car.model }}</h3>
    <h3>Year: {{ car.year }}</h3>
    <h3>Color: {{ car.color }}</h3>
    <a href="/cars">All Cars</a>
    <br />
    <router-link v-bind:to="`/car/${car.id}/edit`">Edit Car</router-link>
    <br />
    <button v-on:click="destroySoldCar(car)">SOLD</button>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      message: "Hello",
      car: {}
    };
  },
  created: function() {
    axios.get("/api/cars/" + this.$route.params.id).then(response => {
      this.car = response.data;
      console.log(this.car);
    });
  },
  methods: {
    destroySoldCar: function(car) {
      axios.delete("/api/cars/" + car.id).then(response => {
        console.log("Sold!!!", response);
        this.$router.push("/cars");
      });
    }
  }
};
</script>
