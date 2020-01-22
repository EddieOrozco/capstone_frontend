<template>
  <div class="cars container">
    <!-- <div class="page-title"><h2>Add new car</h2></div> -->

    <div v-if="formToggle" class="row">
      <div class="col-9 form-container">
        <form v-on:submit.prevent="createCar()" class="custom-form">
          <ul>
            <li class="text-danger" v-for="error in errors">{{ error }}</li>
          </ul>
          <div>
            <div class="page-title"><h2>Add new car</h2></div>
            <div class="custom-form-group">
              <div class="form-group">
                <label class="label-title">Make:</label>
                <input type="text" class="form-control" v-model="make" />
              </div>
              <div class="form-group">
                <label class="label-title">Model:</label>
                <input type="text" class="form-control" v-model="model" />
              </div>
              <div class="form-group">
                <label class="label-title">Year:</label>
                <input type="number" class="form-control" v-model="year" />
              </div>
              <div class="form-group">
                <label class="label-title">Color:</label>
                <input type="text" class="form-control" v-model="color" />
              </div>
              <div class="form-group">
                <label class="label-title">Interior Color:</label>
                <input type="text" class="form-control" v-model="interior_color" />
              </div>
              <div class="form-group">
                <label class="label-title">Car Condition:</label>
                <input type="text" class="form-control" v-model="car_condition" />
              </div>
              <div class="form-group">
                <label class="label-title">Location:</label>
                <input type="text" class="form-control" v-model="location" />
              </div>
              <div class="form-group">
                <label class="label-title">Engine Size:</label>
                <input type="text" class="form-control" v-model="engin_size" />
              </div>
              <div class="form-group">
                <label class="label-title">Transmission Type:</label>
                <input type="text" class="form-control" v-model="transmission_type" />
              </div>
              <div class="form-group">
                <label class="label-title">Exhaust:</label>
                <input type="text" class="form-control" v-model="exhaust" />
              </div>
              <div class="form-group">
                <label class="label-title">Mileage:</label>
                <input type="text" class="form-control" v-model="mileage" />
              </div>
              <div class="form-group">
                <label class="label-title">Tires:</label>
                <input type="text" class="form-control" v-model="tires" />
              </div>
              <div class="form-group">
                <label class="label-title">Rims:</label>
                <input type="text" class="form-control" v-model="rims" />
              </div>
              <div class="form-group">
                <label class="label-title">Car Description:</label>
                <input type="text" class="form-control" v-model="car_description" />
              </div>
              <div class="form-group">
                <label class="label-title">Price:</label>
                <input type="text" class="form-control" v-model="price" />
              </div>
              <div class="add-btn">
                <input type="submit" class="btn btn-primary custom-add-btn" value="Add Car" />
              </div>
            </div>
          </div>
        </form>
      </div>
      <div class="col-3"></div>
    </div>
  </div>
</template>

<style>
.page-title {
  padding-top: 100px;

  text-align: center;
  text-transform: capitalize;
}
.page-title h2 {
  color: #124075;
}
.custom-form {
  padding-bottom: 100px;
}
.form-container {
  width: 40%;
}
.label-title {
  font-weight: 600;
}
.custom-form-group {
  border: 1px solid #124075;
  padding: 30px;
  border-radius: 5px;
}
.add-btn {
  padding-top: 20px;
  text-align: center;
}
.custom-add-btn {
  background-color: #124075;
}
.custom-add-btn:hover {
  transition: 0.5s ease-in-out;
  background-color: #fff;
  color: #124075;
}
</style>

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
