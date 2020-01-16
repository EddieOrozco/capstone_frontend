<template>
  <div class="cars">
    <h2>Create a car</h2>
    <!-- Will Toggle Car Form -->
    <button v-on:click="toggleCreateForm()">Create Car</button>
    <div v-if="formToggle">
      <form v-on:submit.prevent="createCar()">
        <div>
          Make:
          <input type="text" v-model="make" />
          Model:
          <input type="text" v-model="model" />
          Year:
          <input type="number" v-model="year" />
          Color:
          <input type="text" v-model="color" />
          <input type="submit" value="Add Car" />
          <!-- Interior Color
      <input type="text" />
      Car Condition
      <input type="text" />
      Location
      <input type="text" />
      Engine Size
      <input type="text" />
      Transmission Type
      <input type="text" />
      Exhaust
      <input type="text" />
      Mileage
      <input type="text" />
      Price
      <input type="text" />
      Tires
      <input type="text" />
      Rims
      <input type="text" />
      Car Description
      <input type="text" /> -->
        </div>
      </form>
    </div>
    <!-- Will Add Car to User profile -->
    <!-- <button v-on:click="createCar(car)">Add Car</button> -->
    <h2>This is my Cars list boom!!!</h2>
    <div v-for="car in cars">
      <h3>Make: {{ car.make }}</h3>
      <h3>Model: {{ car.model }}</h3>
      <h3>Year: {{ car.year }}</h3>
      <h3>Color: {{ car.color }}</h3>
      <button v-on:click="editCarForm()">EDIT</button>
      <button v-on:click="destroySoldCar(car)">SOLD</button>
      <div v-if="carEditForm">
        Make:
        <input type="text" v-model="car.make" />
        Model:
        <input type="text" v-model="car.model" />
        Year:
        <input type="text" v-model="car.year" />
        Color:
        <input type="text" v-model="car.color" />
        <button v-on:click="updateCar(car)">Update</button>
      </div>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      formToggle: false,
      cars: [],
      make: "",
      model: "",
      year: "",
      color: "",
      carEditForm: false
      // interior_color: "",
      // car_condition: "",
      // location: "",
      // engin_size: "",
      // transmission_type: "",
      // exhaust: "",
      // mileage: "",
      // price: "",
      // tires: "",
      // rims: "",
      // car_description: ""
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
          let car = response.data;
          this.cars.push(car);
          this.make = "";
          this.model = "";
          this.year = "";
          this.color = "";
        })
        .catch(error => console.log(error.response));
    },
    editCarForm: function() {
      this.carEditForm = !this.carEditForm;
    }
  }
};
</script>
