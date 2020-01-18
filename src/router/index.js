import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import AllCars from "../views/Cars/AllCars.vue";
import NewCar from "../views/Cars/NewCar.vue";
import CarShow from "../views/Cars/CarShow.vue";
import CarEdit from "../views/Cars/CarEdit.vue";
import CarOne from "../views/Cars/CarOne.vue";
import UserShow from "../views/UserShow.vue";

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
    path: "/allcars",
    name: "AllCars",
    component: AllCars
  },
  {
    path: "/cars/new",
    name: "newcar",
    component: NewCar
  },
  {
    path: "/cars/:id",
    name: "ShowCar",
    component: CarShow
  },
  {
    path: "/car/:id/edit",
    name: "CarEdit",
    component: CarEdit
  },
  {
    path: "/car/:id",
    name: "CarOne",
    component: CarOne
  },
  {
    path: "/users/:id",
    name: "UserShow",
    component: UserShow
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
