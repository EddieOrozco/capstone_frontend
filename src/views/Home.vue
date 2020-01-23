<template>
  <div class="Home">
    <!-- Start Bottom Header -->
    <div class="header-bg page-area">
      <div class="home-overly"><div class="custom-bg-opacity"></div></div>
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12 col-xs-12 custom-bgimg">
            <div class="slider-content text-left title">
              <div class="header-bottom">
                <div class="layer2 wow zoomIn" data-wow-duration="1s" data-wow-delay=".4s">
                  <h1 class="title2">Custom Classic Cars</h1>
                </div>
                <div class="layer3 wow zoomIn" data-wow-duration="2s" data-wow-delay=".6s">
                  <h2 class="title3">For Car Junkies</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <!-- <div class="container"> -->
      <div class="row">
        <div class="col-6 box-one">
          <h3 class="box-btn"><a href="">Events</a></h3>
        </div>
        <div class="col-6 box-two">
          <h3 class="box-btn ext"><a href="">Auctions</a></h3>
        </div>
        <div class="w-100"></div>
        <div class="col-6 box-three">
          <h3 class="box-btn ext"><a href="">Parts</a></h3>
        </div>
        <div class="col-6 box-four">
          <h3 class="box-btn"><a href="">Sold</a></h3>
        </div>
      </div>
      <!-- </div> -->
    </div>
  </div>
  <!-- END Header -->
</template>

<style>
.cars {
  /*background: blue;*/
}
.custom-bgimg {
  padding: 240px 0;
}
.title {
  padding: 0;
  padding-bottom: 180px;
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
  opacity: 0.4;
  height: 100%;
  width: 100%;
}
.box-btn {
  padding: 10px 0;
  width: 20%;
  background-color: black;
  opacity: 0.8;
}
.box-btn:hover {
  background-color: #124075;
  color: white;
  transition: 0.5s ease-in-out;
}
.box-btn a {
  color: #fff;
  padding: 10px 30px;
}
.ext {
  width: 23%;
}
.box-one {
  background-image: url("https://www.travelwisconsin.com/uploads/events/41/41b2dca6-a848-4129-8757-f6bbe85c65e6-24-20190928_125751.jpg?preset=listing-page-slider-desktop");
  background-repeat: no-repeat, repeat;
  background-position: center;
  background-size: cover;
  display: inline-block;
  width: 50%;
  height: 350px;
}
.box-two {
  background-image: url("https://upload.wikimedia.org/wikipedia/commons/4/42/1968_AMC_AMX_white_at_Rockville_Maryland_show_2007.jpg");
  background-repeat: no-repeat, repeat;
  background-position: center;
  background-size: cover;
  width: 50%;
  height: 350px;
  display: inline-block;
}
.box-three {
  background-image: url("http://assets.mustangandfords.com/f/103995475.jpg?width=620&");
  background-repeat: no-repeat, repeat;
  background-position: center;
  background-size: cover;
  width: 50%;
  height: 350px;
  display: inline-block;
}
.box-four {
  background-image: url("https://hhclassic.com/files/images/2019-chevelle-el-camino-malibu-600x280.jpg");
  background-repeat: no-repeat, repeat;
  background-position: center;
  background-size: cover;
  width: 50%;
  height: 350px;
  display: inline-block;
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
