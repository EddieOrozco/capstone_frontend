<template>
  <div class="AllCars">
    <!-- Start portfolio Area -->
    <div id="portfolio" class="portfolio-area area-padding fix">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="section-headline text-center">
              <h2>All cars</h2>
            </div>
          </div>
        </div>
        <div class="sear-area">
          <div class="jumbotron jumbotron-fluid custom-jumbo">
            <div class="search-text">Search For A Car</div>
            <form>
              <div class="form-row align-items-center search-area">
                <div class="col-sm-3 my-1 input-div">
                  <input type="text" class="form-control custom-input" id="inlineFormInputName" placeholder="Make" />
                </div>
                <div class="col-sm-3 my-1 input-div inptlf">
                  <input type="text" class="form-control custom-input" id="inlineFormInputName" placeholder="Model" />
                </div>
                <div class="col-sm-3 my-1 input-div inptlf push-btn">
                  <input type="text" class="form-control custom-input" id="inlineFormInputName" placeholder="Year" />
                </div>

                <div class="col-auto my-1">
                  <button type="submit" class="btn search-btn">Search</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="row">
          <div class="awesome-project-content">
            <!-- single-awesome-project start -->
            <div v-for="car in cars" class="col-md-4 col-sm-4 col-xs-12 design development">
              <div class="single-awesome-project">
                <div class="awesome-img">
                  <a :href="`/cars/${car.id}`"><img :src="car.main_image" alt="" /></a>

                  <!--  <div class="add-actions text-center">
                    <div class="project-dec">
                      <a class="venobox" data-gall="myGallery" :href="`/cars/${car.id}`">
                        <h4>{{ car.year }} {{ car.make }} {{ car.model }}</h4>

                        <p>{{ car.car_description }}</p>

                        <router-link v-bind:to="`/car/${car.id}`">View Car</router-link>
                      </a>
                    </div>
                  </div> -->

                  <div class="card-body">
                    <h4 class="card-title custom-title">{{ car.year }} {{ car.make }} {{ car.model }}</h4>
                    <ul>
                      <li>
                        <div class="card-subTitle">
                          Color:
                          <span>{{ car.color }}</span>
                        </div>
                      </li>
                      <li>
                        <div class="card-subTitle">
                          Interior:
                          <span>{{ car.interior_color }}</span>
                        </div>
                      </li>
                      <li>
                        <div class="card-subTitle">
                          Mileage:
                          <span>{{ car.mileage }}</span>
                        </div>
                      </li>
                      <li>
                        <div class="card-subTitle">
                          Location:
                          <span>{{ car.location }}</span>
                        </div>
                      </li>
                    </ul>
                    <div class="card-subTitle">Description:</div>
                    <p class="card-text customText">
                      {{ car.car_description }}
                      <a :href="`/cars/${car.id}`" class="btn ">More Info</a>
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
  </div>
</template>

<style>
.custom-jumbo {
  background-color: #124075;
  /*background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS84ebDBapS9Z9u760B-jsA0B4IilPM9f8SScWedtwkpPqvLWsz&s");*/
  background-repeat: no-repeat, repeat;
  background-position: center;
  background-size: cover;
}
.search-text {
  padding-bottom: 15px;
  font-size: 3rem;
  color: #fff;
}
.input-div {
  padding: 0;
}
.inptlf {
  padding-left: 8px;
}
.push-btn {
  margin-right: 8px;
}
.custom-input {
  padding: 4px 8px;
  font-size: 2rem;
  font-weight: 300;
}
.search-btn a {
  background: #d3d3d3;
  /*margin-left: 8px;*/
}
.custom-title {
  text-align: center;
  font-weight: 600;
}
.card-subTitle {
  font-size: 1.3em;

  padding-bottom: 5px;
  /*font-weight: 300;*/
}
.card-subTitle span {
  font-size: 1em;
  font-weight: 300;
  text-transform: capitalize;
  padding-left: 2px;
}
.customText a {
  padding-left: 0;
  font-size: 1em;
}
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      cars: []
    };
  },
  created: function() {
    axios.get("/api/cars").then(response => {
      this.cars = response.data;
    });
  },
  methods: {}
};
</script>
