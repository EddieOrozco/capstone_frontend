<template>
  <div class="bg-img">
    <div class="cars container">
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
                  <div class="new-title" style="color:#fff;"><h2>Add new car</h2></div>
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
                      <input type="text" class="form-control" v-model="year" />
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
                      <label class="label-title">Price:</label>
                      <input type="text" class="form-control" v-model="price" />
                    </div>
                    <div class="form-group">
                      <label class="label-title">Car Description:</label>
                      <input type="text" class="form-control text-color" v-model="car_description" />
                    </div>
                    <div class="add-btn">
                      <input type="submit" class="btn btn-primary custom-add-btn" value="Add Car" />
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
.new-title {
  text-align: center;
}
.new-title h2 {
  color: #fff;
}
.cars {
  margin-top: 50px;
  background-image: url("https://i.pinimg.com/originals/35/ab/e2/35abe2bad4fd1d7635b4974c7140bd2f.jpg");
  margin-top: 70px;
  background-repeat: no-repeat, repeat;
  background-position: top;
  height: 100%;
  width: 100%;
  padding: 0;
}

.bg-dark {
  background-color: rgba(0, 0, 0, 0.6);
  height: 100%;
  width: 100%;
  padding: 0 50px 75px;
  margin: 0;
}
.form-group-container {
  margin-top: 100px;
}
.custom-form-group {
  border: none;
}
.form-group {
  display: inline-block;
  text-align: center;
  margin-left: 45px;
}
.block-style {
  display: block;
  width: 100%;
}
.contact-form input[type="text"] {
  color: #fff;
}
.page-title {
  /*padding-top: 100px;*/
  padding-bottom: 10px;
  text-align: center;
  text-transform: capitalize;
}
.page-title h2 {
  color: #124075;
}
.form-container {
  width: 40%;
  display: inline-block;
}
.form-control {
  border: none;
  border-radius: none;
  border-bottom: 1px solid #555;
}
.label-title {
  font-weight: 600;
  color: #fff;
}
.custom-form-group {
  padding: 30px;
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
