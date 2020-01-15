<template>
  <div class="users">
    <h1>{{ message }}</h1>
    <div v-for="user in users">
      {{ user.name }}
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      message: "Welcome to Users Index!",
      users: []
    };
  },
  created: function() {
    axios.get("/api/users").then(response => {
      this.users = response.data;
    });
  },
  methods: {}
};
</script>
