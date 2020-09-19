<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import helpers from "./utils/helpers";
export default {
  name: "App",
  components: {
    // Login,
  },

  beforeCreate() {
    helpers.isLogin === true
      ? this.$router.replace("newfeed")
      : this.$router.replace("login");
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
