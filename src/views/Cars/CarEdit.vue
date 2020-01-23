<template>
  <div class="CarEdit">
    <div class="edit-cars container">
      <div class="bg-dark">
        <div class="row">
          <!-- Start  contact -->
          <div class="col-md-6 col-sm-6 col-xs-12 block-style">
            <div class="form contact-form">
              <form v-on:submit.prevent="createCar()" class="custom-form">
                <ul>
                  <li class="text-danger" v-for="error in errors">{{ error }}</li>
                </ul>
                <div class="form-group-container">
                  <div class="new-title" style="color:#fff;"><h2>Edit Car</h2></div>
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
                      <input class="form-control" type="text" v-model="car.year" />
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
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.edit-cars {
  margin-top: 50px;
  background-image: url("https://wallpaperaccess.com/full/1207590.jpg");
  margin-top: 70px;
  background-repeat: no-repeat, repeat;
  background-position: center;
  height: 100%;
  width: 100%;
  padding: 0;
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
