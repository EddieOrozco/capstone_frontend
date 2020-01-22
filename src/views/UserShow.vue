<template>
  <div class="UserShow">
    <!-- Start portfolio Area -->
    <div id="portfolio" class="portfolio-area area-padding fix">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 user-title">
            <div class="section-headline text-center profile-title">
              <h2>{{ user.name }}</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <h4 class="car-info-title">Selling cars</h4>
          <div class="awesome-project-content">
            <!-- single-awesome-project start -->
            <div v-for="car in user.selling_cars" class="col-md-4 col-sm-4 col-xs-12 design development">
              <div class="single-awesome-project">
                <div class="awesome-img">
                  <a :href="`/cars/${car.id}`"><img :src="car.main_image" alt="" /></a>
                  <div class="card-body">
                    <h4 class="card-title custom-title">{{ car.year }} {{ car.make }} {{ car.model }}</h4>
                    <p class="card-text btn-container">
                      <a :href="`/cars/${car.id}`" class="btn btn-primary profile-btns btn-left">View Car</a>
                      <a href="/" class="btn btn-primary profile-btns btn-right">Messages</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <!-- ({{ user.selling_cars.length }})
            ({{ user.bought_cars.length }}) -->
            <!-- single-awesome-project end -->
          </div>
        </div>
        <div class="row">
          <h4 class="car-info-title">Bought cars</h4>
          <div class="awesome-project-content">
            <!-- single-awesome-project start -->
            <div v-for="car in user.bought_cars" class="col-md-4 col-sm-4 col-xs-12 design development">
              <div class="single-awesome-project">
                <div class="awesome-img">
                  <a :href="`/cars/${car.id}`"><img :src="car.main_image" alt="" /></a>
                  <div class="card-body">
                    <h4 class="card-title custom-title">{{ car.year }} {{ car.make }} {{ car.model }}</h4>
                    <p class="card-text btn-container">
                      <a :href="`/cars/${car.id}`" class="btn btn-primary profile-btns btn-left">View Car</a>
                      <a href="/" class="btn btn-primary profile-btns btn-right">Messages</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <!-- single-awesome-project end -->
          </div>
        </div>
      </div>
    </div>
    <!-- awesome-portfolio end -->
    <!-- <h4>Messages</h4>
    <div v-for="message in user.received_messages">
      {{ message }}
    </div> -->
    <!-- </div> -->
  </div>
</template>

<style>
.user-title {
  padding-top: 50px;
}
.user-title h2 {
  color: #124075;
}
.top-title {
  text-align: center;
}
.car-info-title {
  text-transform: capitalize;
  padding-left: 15px;
  font-size: 3rem;
}
.btn-container {
  text-align: center;
}
.profile-btns {
  background-color: #124075;
}
.profile-btns .btn-right {
  margin-left: 1px;
}
.profile-btns:hover {
  transition: 0.5s ease-in-out;
  background-color: #fff;
  color: #124075;
}
.btn-left {
  margin-right: 1px;
}
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      message: "Hello",
      cars: [],
      user: {}
    };
  },
  created: function() {
    axios.get("/api/users/" + this.$route.params.id).then(response => {
      this.user = response.data;
      console.log(this.user);
    });
    // axios.get("/api/cars").then(response => {
    //   this.cars = response.data;
    // });
  },
  methods: {}
};
</script>
