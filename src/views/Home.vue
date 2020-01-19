<template>
  <div class="Home">
    <!-- Start Bottom Header -->
    <div class="header-bg page-area">
      <div class="home-overly"><div class="custom-bg-opacity"></div></div>
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12 col-xs-12">
            <div class="slider-content text-left">
              <div class="header-bottom">
                <div class="layer2 wow zoomIn" data-wow-duration="1s" data-wow-delay=".4s">
                  <h1 class="title2">Custom Classic Cars</h1>
                </div>
                <div class="layer3 wow zoomInUp" data-wow-duration="2s" data-wow-delay="1s">
                  <h2 class="title3">For Car Junkies</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- END Header -->
    <div class="section">
      <h1>Events</h1>
    </div>
  </div>
</template>

<style>
.cars {
  /*background: blue;*/
}

.searchText {
  color: #fff;
}
.home-overly {
  background-image: url("https://i.ytimg.com/vi/R1FNEAVP0u0/maxresdefault.jpg");
  background-repeat: no-repeat, repeat;
  background-position: center;
  background-size: cover;
}
.custom-bg-opacity {
  background-color: black;
  opacity: 0.5;
  height: 100%;
  width: 100%;
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
