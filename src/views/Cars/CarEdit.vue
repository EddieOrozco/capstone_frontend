<template>
  <div class="CarEdit">
    <div class="col-9 form-container container">
      <form v-on:submit.prevent="updateCar()">
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="edit-title"><h2>Edit Car</h2></div>
        <div class="custom-form-group">
          <div class="form-group">
            <label class="label-title">Make:</label>
            <input type="text" v-model="car.make" class="form-control" />
          </div>
          <div class="form-group">
            <label class="label-title">Model:</label>
            <input class="form-control" type="text" v-model="car.model" />
          </div>
          <div class="form-group">
            <label class="label-title">Year:</label>
            <input class="form-control" type="number" v-model="car.year" />
          </div>
          <div class="form-group">
            <label class="label-title">Color:</label>
            <input class="form-control" type="text" v-model="car.color" />
          </div>
          <div class="form-group">
            <label class="label-title">Interior Color:</label>
            <input class="form-control" type="text" v-model="car.interior_color" />
          </div>
          <div class="form-group">
            <label class="label-title">Car Condition:</label>
            <input class="form-control" type="text" v-model="car.car_condition" />
          </div>
          <div class="form-group">
            <label class="label-title">Location:</label>
            <input class="form-control" type="text" v-model="car.location" />
          </div>
          <div class="form-group">
            <label class="label-title">Engine Size:</label>
            <input class="form-control" type="text" v-model="car.engin_size" />
          </div>
          <div class="form-group">
            <label class="label-title">Transmission Type:</label>
            <input class="form-control" type="text" v-model="car.transmission_type" />
          </div>
          <div class="form-group">
            <label class="label-title">Exhaust:</label>
            <input class="form-control" type="text" v-model="car.exhaust" />
          </div>
          <div class="form-group">
            <label class="label-title">Mileage:</label>
            <input class="form-control" type="text" v-model="car.mileage" />
          </div>
          <div class="form-group">
            <label class="label-title">Tires:</label>
            <input class="form-control" type="text" v-model="car.tires" />
          </div>
          <div class="form-group">
            <label class="label-title">Rims:</label>
            <input class="form-control" type="text" v-model="car.rims" />
          </div>
          <div class="form-group">
            <label class="label-title">Car Description:</label>
            <input class="form-control" type="text" v-model="car.car_description" />
          </div>
          <div class="form-group">
            <label class="label-title">Price:</label>
            <input class="form-control" type="text" v-model="car.price" />
          </div>
          <div class="add-btn">
            <input class="btn btn-primary custom-add-btn" type="submit" value="Create" />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style>
.edit-title {
  padding-top: 100px;
  text-align: center;
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
