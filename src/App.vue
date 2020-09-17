<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <Login /> -->
    <router-view></router-view>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import ToDoMain from "./components/ToDoApp/ToDoMain";
// import Login from "./pages/login/Login";

export default {
  name: "App",
  components: {
    // Login,
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
