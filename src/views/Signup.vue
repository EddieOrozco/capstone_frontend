<template>
  <div class="signup">
    <div class="container">
      <form v-on:submit.prevent="submit()" class="login-signup-form">
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="page-title"><h1>Signup</h1></div>
        <div class="form-group">
          <label>Name:</label>
          <input type="text" class="form-control" v-model="name" />
        </div>
        <div class="form-group">
          <label>Email:</label>
          <input type="email" class="form-control" v-model="email" />
        </div>
        <div class="form-group">
          <label>Password:</label>
          <input type="password" class="form-control" v-model="password" />
        </div>
        <div class="form-group">
          <label>Password confirmation:</label>
          <input type="password" class="form-control" v-model="passwordConfirmation" />
        </div>
        <div class="add-btn">
          <input type="submit" class="btn btn-primary custom-add-btn" value="Submit" />
        </div>
      </form>
    </div>
  </div>
</template>

<style>
.page-title h1 {
  color: #124075;
}
.login-signup-form {
  padding: 0 250px 100px;
}
.add-btn {
  padding-top: 20px;
  text-align: center;
}
.custom-add-btn {
  background-color: #124075;
}
.custom-add-btn:hover {
  transition: 0.5s ease-in-out;
  background-color: #fff;
  color: #124075;
}
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation
      };
      axios
        .post("/api/users", params)
        .then(response => {
          this.$router.push("/login");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>
