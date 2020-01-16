import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import Cars from "../views/Cars/CarsIndex.vue";
import NewCar from "../views/Cars/NewCar.vue";
import CarShow from "../views/Cars/CarShow.vue";
import CarEdit from "../views/Cars/CarEdit.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  { path: "/signup", name: "signup", component: Signup },
  { path: "/login", name: "login", component: Login },
  { path: "/logout", name: "logout", component: Logout },
  {
    path: "/cars",
    name: "cars",
    component: Cars
  },
  {
    path: "/car/new",
    name: "newcar",
    component: NewCar
  },
  {
    path: "/car/:id",
    name: "ShowCar",
    component: CarShow
  },
  {
    path: "/car/:id/edit",
    name: "CarEdit",
    component: CarEdit
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
