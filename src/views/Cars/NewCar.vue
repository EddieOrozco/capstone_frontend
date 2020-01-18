<template>
  <div class="cars container">
    <h2>Create a car</h2>
    <!-- <button v-on:click="toggleCreateForm()">Create Car</button> -->
    <div v-if="formToggle">
      <form v-on:submit.prevent="createCar()">
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div>
          <div class="form-group">
            <label>Make:</label>
            <input type="text" class="form-control" v-model="make" />
          </div>
          <div class="form-group">
            <label>Model:</label>
            <input type="text" class="form-control" v-model="model" />
          </div>
          <div class="form-group">
            <label>Year:</label>
            <input type="number" class="form-control" v-model="year" />
          </div>
          <div class="form-group">
            <label>Color:</label>
            <input type="text" class="form-control" v-model="color" />
          </div>
          <div class="form-group">
            <label>Interior Color:</label>
            <input type="text" class="form-control" v-model="interior_color" />
          </div>
          <div class="form-group">
            <label>Car Condition:</label>
            <input type="text" class="form-control" v-model="car_condition" />
          </div>
          <div class="form-group">
            <label>Location:</label>
            <input type="text" class="form-control" v-model="location" />
          </div>
          <div class="form-group">
            <label>Engine Size:</label>
            <input type="text" class="form-control" v-model="engin_size" />
          </div>
          <div class="form-group">
            <label>Transmission Type:</label>
            <input type="text" class="form-control" v-model="transmission_type" />
          </div>
          <div class="form-group">
            <label>Exhaust:</label>
            <input type="text" class="form-control" v-model="exhaust" />
          </div>
          <div class="form-group">
            <label>Mileage:</label>
            <input type="text" class="form-control" v-model="mileage" />
          </div>
          <div class="form-group">
            <label>Tires:</label>
            <input type="text" class="form-control" v-model="tires" />
          </div>
          <div class="form-group">
            <label>Rims:</label>
            <input type="text" class="form-control" v-model="rims" />
          </div>
          <div class="form-group">
            <label>Car Description:</label>
            <input type="text" class="form-control" v-model="car_description" />
          </div>
          <div class="form-group">
            <label>Price:</label>
            <input type="text" class="form-control" v-model="price" />
          </div>

          <input type="submit" class="btn btn-primary" value="Add Car" />
        </div>
      </form>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      formToggle: true,
      cars: [],
      make: "",
      model: "",
      year: "",
      color: "",
      interior_color: "",
      car_condition: "",
      location: "",
      engin_size: "",
      transmission_type: "",
      exhaust: "",
      mileage: "",
      tires: "",
      rims: "",
      car_description: "",
      price: "",
      errors: []
    };
  },
  created: function() {
    axios.get("/api/cars").then(response => {
      this.cars = response.data;
    });
  },
  methods: {
    toggleCreateForm: function() {
      this.formToggle = !this.formToggle;
      console.log("ceated car");
    },
    createCar: function() {
      let params = {
        make: this.make,
        model: this.model,
        year: this.year,
        color: this.color
      };
      axios
        .post("/api/cars", params)
        .then(response => {
          this.$router.push("/cars");
        })
        .catch(error => console.log(error.response));
    }
  }
};
</script>
