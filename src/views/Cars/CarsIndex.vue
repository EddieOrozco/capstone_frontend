<template>
  <div class="Cars">
    <h2>This is my Cars list boom!!!</h2>
    <div v-for="car in cars">
      <h3>Make: {{ car.make }}</h3>
      <h3>Model: {{ car.model }}</h3>
      <h3>Year: {{ car.year }}</h3>
      <h3>Color: {{ car.color }}</h3>
      <router-link v-bind:to="`/car/${car.id}`">View Car</router-link>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      cars: []
    };
  },
  created: function() {
    axios.get("/api/cars").then(response => {
      this.cars = response.data;
    });
  },
  methods: {}
};
</script>
