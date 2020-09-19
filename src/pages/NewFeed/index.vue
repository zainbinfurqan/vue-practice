<template>
  <Loading v-if="isLoading" />
  <div v-else class="d-flex flex-column bd-highlight mb-3">
    <div class="m-2 d-flex justify-content-between bd-highlight mb-3">
      <button type="button" class="btn btn-link">
        <router-link to="/newpost">Creat post</router-link>
      </button>
      <button v-on:click="logout" type="button" class="btn btn-link">logout</button>
    </div>
    <div class="d-flex flex-row bd-highlight mb-3 flex-wrap justify-content-center">
      <div
        class="card border-secondary p-2 bd-highlight m-2"
        style="max-width: 18rem;"
        v-bind:key="item.id"
        v-for="(item) in posts"
      >
        <div class="card-header"></div>
        <div class="card-body text-secondary">
          <h5 class="card-title text-primary">Title: {{item.title}}</h5>
          <p class="card-text text-info">{{item.body}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import apis from "../../utils/api";
import Loading from "../../components/Loading/Loading";

export default {
  name: "NewFeed",
  components: { Loading },

  data() {
    return {
      isLoading: false,
      posts: [],
    };
  },
  methods: {
    async fetchPosts() {
      const response = await apis.searchPost();
      this.posts = response;
      this.isLoading = false;
    },
    logout() {
      this.$store.commit("logout");
      this.$router.replace("login");
    },
  },
  computed: {
    // auth() {
    //   return this.$store.state.auth;
    // },
  },
  created() {
    this.isLoading = true;
    this.fetchPosts();
  },
};
</script>

<style scoped>
</style>