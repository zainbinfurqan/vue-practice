<template>
  <div class="login-form rounded-sm">
    <div class="form rounded-sm">
      <h2 class="text-center text-white">Log in</h2>
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          placeholder="Username"
          v-model="email"
          required="required"
        />
      </div>
      <div class="form-group">
        <input
          type="password"
          class="form-control"
          v-model="password"
          placeholder="Password"
          required="required"
        />
      </div>
      <div class="form-group">
        <button v-on:click="login" class="btn btn-primary btn-block">Log in</button>
      </div>
      <div class="clearfix">
        <label class="float-left form-check-label text-white">
          <input type="checkbox" /> Remember me
        </label>
        <a href="#" class="float-right text-white">Forgot Password?</a>
      </div>
    </div>
    <p class="text-center">
      <router-link to="/registration">Create an Account</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      console.log(this.email);
      console.log(this.password);
      let data = {
        email: this.email,
        password: this.password,
      };
      this.$store.commit("login", data);
      this.$router.replace("newfeed");
    },
  },
  beforeCreate() {
    console.log(this.$store.state.isLogin);
    this.$store.state.isLogin && this.$router.replace("newfeed");
  },
};
</script>

<style scoped>
.login-form {
  width: 315px;
  margin: 50px auto;
  font-size: 15px;
}
.login-form .form {
  margin-bottom: 15px;
  background: #064b90;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  padding: 30px;
}
.login-form h2 {
  margin: 0 0 15px;
}
.form-control,
.btn {
  min-height: 38px;
  border-radius: 2px;
}
.btn {
  font-size: 15px;
  font-weight: bold;
}
</style>