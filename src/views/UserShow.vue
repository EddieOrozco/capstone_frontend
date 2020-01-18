<template>
  <div class="UserShow">
    <h2>User profile</h2>
    <p>{{ user.name }}</p>
    <h4>Selling cars</h4>
    <div v-for="car in user.selling_cars">
      {{ car.make }}
    </div>
    <h4>Bought cars</h4>
    <div v-for="car in user.bought_cars">
      {{ car }}
    </div>
    <h4>Messages</h4>
    <div v-for="message in user.received_messages">
      {{ message }}
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      message: "Hello",
      user: {}
    };
  },
  created: function() {
    axios.get("/api/users/" + this.$route.params.id).then(response => {
      this.user = response.data;
      console.log(this.user);
    });
  },
  methods: {}
};
</script>
