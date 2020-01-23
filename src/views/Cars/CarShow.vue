<template>
  <div class="CarsShow">
    <div id="about" class="about-area area-padding">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12 col-xs-12">
            <div class="section-headline text-center page-title-edit">
              <h2>{{ car.year }} {{ car.model }}</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <!-- single-well start-->
          <div class="col-md-6 col-sm-6 col-xs-12">
            <div class="well-left">
              <div class="single-well">
                <img v-bind:src="car.main_image" alt="" />
              </div>
            </div>
            <div v-if="car.is_seller" class="edit-btn-container">
              <h3 class="edit-btn-title">You can edit your car here!</h3>
              <a class="btn btn-primary edit-btns" href="/users/current_user">My Cars</a>

              <router-link class="btn btn-primary edit-btns" v-bind:to="`/car/${car.id}/edit`">Edit Car</router-link>

              <button class="btn btn-primary sold-btn" v-on:click="destroySoldCar(car)">SOLD</button>
            </div>
          </div>
          <!-- single-well end-->
          <div class="col-md-6 col-sm-6 col-xs-12">
            <div class="well-middle">
              <div class="single-well">
                <!-- <h4 class="sec-head">{{ car.year }} {{ car.make }} {{ car.model }}</h4> -->
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
                  <li>
                    <div class="card-subTitle">
                      Condition:
                      <span>{{ car.exhaust }}</span>
                    </div>
                  </li>
                  <li>
                    <div class="card-subTitle">
                      Engin Size:
                      <span>{{ car.engin_size }}</span>
                    </div>
                  </li>
                  <li>
                    <div class="card-subTitle">
                      Transmission Type:
                      <span>{{ car.transmission_type }}</span>
                    </div>
                  </li>
                  <li>
                    <div class="card-subTitle">
                      Tires:
                      <span>{{ car.tires }}</span>
                    </div>
                  </li>
                  <li>
                    <div class="card-subTitle">
                      Rims:
                      <span>{{ car.rims }}</span>
                    </div>
                  </li>
                  <li>
                    <div class="card-subTitle">
                      Price:
                      <span>$ {{ car.price }}</span>
                    </div>
                  </li>

                  <li>
                    <div class="card-subTitle">
                      Description:
                      <span>{{ car.car_description }}</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- End col-->
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.edit-btn-container {
  text-align: center;
  padding-top: 20px;
}
.edit-btns {
  margin-left: 5px;
  text-transform: uppercase;
  background-color: #124075;
}
.sold-btn {
  margin-left: 5px;
  text-transform: uppercase;
  background-color: #124075;
}
.sold-btn:hover {
  transition: 0.3s ease-in-out;
  background-color: red;
  color: #fff;
}
.edit-btns:hover {
  transition: 0.3s ease-in-out;
  background-color: #fff;
  color: #124075;
}
.page-title-edit {
  padding-top: 50px;
  text-align: center;
  text-transform: capitalize;
}
.page-title-edit h2 {
  color: #124075;
}
/*sold-btn {
  background-color: red;
  border: none;
}*/
</style>

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
