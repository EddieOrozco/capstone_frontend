<template>
  <div class="CarEdit">
    <div class="container">
      <form v-on:submit.prevent="updateCar()">
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="edit-title"><h2>Edit Car</h2></div>
        <div>
          <div class="form-group">
            <label>Make:</label>
            <input type="text" v-model="car.make" />
          </div>
          <div class="form-group">
            <label>Model:</label>
            <input type="text" v-model="car.model" />
          </div>
          <div class="form-group">
            <label>Year:</label>
            <input type="number" v-model="car.year" />
          </div>
          <div class="form-group">
            <label>Color:</label>
            <input type="text" v-model="car.color" />
          </div>
          <div class="form-group">
            <label>Interior Color:</label>
            <input type="text" v-model="car.interior_color" />
          </div>
          <div class="form-group">
            <label>Car Condition:</label>
            <input type="text" v-model="car.car_condition" />
          </div>
          <div class="form-group">
            <label>Location:</label>
            <input type="text" v-model="car.location" />
          </div>
          <div class="form-group">
            <label>Engine Size:</label>
            <input type="text" v-model="car.engin_size" />
          </div>
          <div class="form-group">
            <label>Transmission Type:</label>
            <input type="text" v-model="car.transmission_type" />
          </div>
          <div class="form-group">
            <label>Exhaust:</label>
            <input type="text" v-model="car.exhaust" />
          </div>
          <div class="form-group">
            <label>Mileage:</label>
            <input type="text" v-model="car.mileage" />
          </div>
          <div class="form-group">
            <label>Tires:</label>
            <input type="text" v-model="car.tires" />
          </div>
          <div class="form-group">
            <label>Rims:</label>
            <input type="text" v-model="car.rims" />
          </div>
          <div class="form-group">
            <label>Car Description:</label>
            <input type="text" v-model="car.car_description" />
          </div>
          <div class="form-group">
            <label>Price:</label>
            <input type="text" v-model="car.price" />
          </div>
          <input type="submit" value="Create" />
        </div>
      </form>
    </div>
  </div>
</template>

<style>
.edit-title {
  padding-top: 100px;
}
.edit-title h2 {
  color: #124075;
}
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      car: {},
      errors: []
    };
  },
  created: function() {
    axios.get("/api/cars/" + this.$route.params.id).then(response => {
      this.car = response.data;
      console.log(this.car);
    });
  },
  methods: {
    updateCar: function() {
      console.log("update");
      let params = {
        make: this.car.make,
        model: this.car.model,
        year: this.car.year,
        color: this.car.color
      };
      axios
        .patch("/api/cars/" + this.$route.params.id, params)
        .then(response => {
          this.$router.push("/cars");
        })
        .catch(error => console.log(error.response));
    }
  }
};
</script>
