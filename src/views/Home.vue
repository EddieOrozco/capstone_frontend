<template>
  <div class="Home">
    <!-- Start Bottom Header -->
    <div class="header-bg page-area">
      <div class="home-overly"></div>
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12 col-xs-12">
            <div class="slider-content text-center">
              <div class="header-bottom">
                <div class="layer2 wow zoomIn" data-wow-duration="1s" data-wow-delay=".4s">
                  <h1 class="title2">My Blog</h1>
                </div>
                <div class="layer3 wow zoomInUp" data-wow-duration="2s" data-wow-delay="1s">
                  <h2 class="title3">Profesional Blog Page</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- END Header -->

    <!-- <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="https://www.championmotorsinternational.com/galleria_images/1081/1081_main_l.jpg"
            class="d-block w-100"
            alt=""
          />
          <div class="carousel-caption d-none d-md-block">
            <h1>Custom Classic Cars</h1>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://www.championmotorsinternational.com/galleria_images/1081/1081_main_l.jpg"
            class="d-block w-100"
            alt=""
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://www.championmotorsinternational.com/galleria_images/1081/1081_main_l.jpg"
            class="d-block w-100"
            alt=""
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div> -->
    <!-- <div class="section">
      <div class="search">
        <div class="searchText">Search For A Car</div>
        <input type="text" placeholder="Type Make" v-model="carFilter" list="carType" />
        <input type="text" placeholder="Type Model" v-model="carFilter" list="carType" />
        <datalist id="carType">
          <option v-for="car in cars">
            {{ car.make }}
          </option>
        </datalist>
      </div>
      <p class="lead">
        <a class="btn btn-primary btn-md" href="#" role="button">Search</a>
      </p>
    </div> -->

    <!-- <div v-for="car in filterBy(cars, carFilter, 'make', 'model', 'year', 'color')">
      <h3>Make: {{ car.make }}</h3>
      <h3>Model: {{ car.model }}</h3>
      <h3>Year: {{ car.year }}</h3>
      <h3>Color: {{ car.color }}</h3>
      <router-link v-bind:to="`/cars/${car.id}`">Home</router-link>
    </div>
    <div class="card-deck row">
      <div class="card col-6 col-md-4" style="width: 18rem;">
        <img
          class="card-img-top"
          src="https://www.championmotorsinternational.com/galleria_images/1081/1081_main_l.jpg"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div class="card col-6 col-md-4" style="width: 18rem;">
        <img
          class="card-img-top"
          src="https://www.championmotorsinternational.com/galleria_images/1081/1081_main_l.jpg"
          alt="Card image cap"
        />
        <div class="card-body" v-for="car in cars">
          <h5 class="card-title">{{ car.make }}</h5>
          <h5 class="card-title">{{ car.model }}</h5>
          <h5 class="card-title">{{ car.year }}</h5>
          <h5 class="card-title">{{ car.color }}</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div class="card col-6 col-md-4" style="width: 18rem;">
        <img
          class="card-img-top"
          src="https://www.championmotorsinternational.com/galleria_images/1081/1081_main_l.jpg"
          alt="Card image cap"
        />
        <div class="card-body" v-for="car in cars">
          <h5 class="card-title">{{ car.make }}</h5>
          <h5 class="card-title">{{ car.model }}</h5>
          <h5 class="card-title">{{ car.year }}</h5>
          <h5 class="card-title">{{ car.color }}</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>-->
  </div>
</template>

<style>
.cars {
  /*background: blue;*/
}
.section {
  background-image: url("https://www.championmotorsinternational.com/galleria_images/1081/1081_main_l.jpg");
  background-repeat: no-repeat, repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 500px;
}
.jumbotron {
  background-color: #fff;
}
.subSection {
  /*background-color: rgba(10, 10, 10, 0.3);*/
  /*opacity: 0.9;*/
  /*background-color: rgba(0, 0, 0, 0);*/
  /*width: 100%;
  height: 100%;
  border-radius: none;*/
}

.searchText {
  color: #fff;
}
</style>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";
export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      message: "CUSTOM CLASSIC CARS",
      cars: [],
      images: [],
      carFilter: ""
    };
  },
  created: function() {
    axios.get("/api/cars").then(response => {
      this.cars = response.data;
      console.log(this.cars);
    });
  },
  methods: {}
};
</script>
