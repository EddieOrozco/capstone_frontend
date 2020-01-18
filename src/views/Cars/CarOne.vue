<template>
  <div class="container">
    <h2>{{ car.image }}</h2>
    <h2>{{ car.make }}</h2>
    <h2>{{ car.model }}</h2>
    <h2>{{ car.year }}</h2>
    <router-link to="/cars">Back to all photos</router-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      car: {}
    };
  },
  created: function() {
    axios.get("/api/cars/" + this.$route.params.id).then(response => {
      this.car = response.data;
    });
  },
  methods: {}
};
</script>

