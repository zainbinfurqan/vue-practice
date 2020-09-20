<template>
  <div v-if="isLoginFlag" id="app">
    <nav class="navbar sticky-top navbar-light bg-light">
      <a class="navbar-brand" href="#">Sticky top</a>
    </nav>
    <router-view></router-view>
  </div>
  <div v-else id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import helpers from "./utils/helpers";
export default {
  name: "App",
  data() {
    return { isLoginFlag: false };
  },

  beforeCreate() {
    helpers.isAuthrized("", this.$router);
    console.log("helpers.isLogin()=>", helpers.isLogin());
    this.isLoginFlag = helpers.isLogin();
    this.$store.commit("initiaStore");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
</style>
