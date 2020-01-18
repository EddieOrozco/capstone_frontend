<template>
  <div class="CarsShow">
    <div id="about" class="about-area area-padding">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12 col-xs-12">
            <div class="section-headline text-center">
              <h2>About eBusiness</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <!-- single-well start-->
          <div class="col-md-6 col-sm-6 col-xs-12">
            <div class="well-left">
              <div class="single-well">
                <a href="#">
                  <img v-bind:src="car.main_image" alt="" />
                </a>
              </div>
            </div>
          </div>
          <!-- single-well end-->
          <div class="col-md-6 col-sm-6 col-xs-12">
            <div class="well-middle">
              <div class="single-well">
                <a href="#">
                  <h4 class="sec-head">project Maintenance</h4>
                </a>
                <p>
                  Redug Lagre dolor sit amet, consectetur adipisicing elit. Itaque quas officiis iure aspernatur sit
                  adipisci quaerat unde at nequeRedug Lagre dolor sit amet, consectetur adipisicing elit. Itaque quas
                  officiis iure
                </p>
                <ul>
                  <li>
                    <i class="fa fa-check"></i>
                    Interior design Package
                  </li>
                  <li>
                    <i class="fa fa-check"></i>
                    Building House
                  </li>
                  <li>
                    <i class="fa fa-check"></i>
                    Reparing of Residentail Roof
                  </li>
                  <li>
                    <i class="fa fa-check"></i>
                    Renovaion of Commercial Office
                  </li>
                  <li>
                    <i class="fa fa-check"></i>
                    Make Quality Products
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- End col-->
        </div>
      </div>
    </div>

    {{ message }}
    <h2>This is my Cars list boom!!!</h2>
    <h3>Make: {{ car.make }}</h3>
    <h3>Model: {{ car.model }}</h3>
    <h3>Year: {{ car.year }}</h3>
    <h3>Color: {{ car.color }}</h3>
    <h3>Description: {{ car.car_description }}</h3>
    <a href="/cars">All Cars</a>
    <br />
    <router-link v-bind:to="`/car/${car.id}/edit`">Edit Car</router-link>
    <br />
    <button v-on:click="destroySoldCar(car)">SOLD</button>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      message: "Hello",
      car: {}
    };
  },
  created: function() {
    axios.get("/api/cars/" + this.$route.params.id).then(response => {
      this.car = response.data;
      console.log(this.car);
    });
  },
  methods: {
    destroySoldCar: function(car) {
      axios.delete("/api/cars/" + car.id).then(response => {
        console.log("Sold!!!", response);
        this.$router.push("/cars");
      });
    }
  }
};
</script>
