<template>
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
</template>

<script>
import apis from "../../utils/api";

export default {
  name: "NewFeed",
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    async fetchPosts() {
      const response = await apis.fetchPosts();
      this.posts = response;
      console.log(response);
    },
  },
  created() {
    this.fetchPosts();
  },
};
</script>

<style scoped>
</style>