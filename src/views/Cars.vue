<template>
  <div class="cars">
    <h2>Create a car</h2>
    <!-- Will Toggle Car Form -->
    <button>New Car</button>

    <div>
      Make
      <input type="text" />
      Model
      <input type="text" />
      Year
      <input type="text" />
      Color
      <input type="text" />
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
    <!-- Will Add Car to User profile -->
    <button>Add Car</button>

    <h1>{{ message }}</h1>
    <p>This is my Cars list boom!!!</p>
    <div v-for="car in cars">
      <h3>{{ car.make }}</h3>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      message: "Welcome to Cars Index!",
      cars: [],
      make: "",
      model: "",
      year: "",
      color: ""
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
    createCar: function() {
      let params = {
        make: this.make,
        model: this.model,
        year: this.year,
        color: this.color
      };
      axios.post("/api/cars", params).then(response => {
        this.cars.push(response.data);
        this.make = "";
        this.model = "";
        this.year = "";
        this.color = "";
      });
    }
  }
};
</script>
