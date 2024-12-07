<template>
  <div class="posts">
    <h1>Posts</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <router-link :to="'/postsDetail/' + post.id">{{ post.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        { id: 1, title: "Post 1" },
        { id: 2, title: "Post 2" },
        { id: 3, title: "Post 3" },
        { id: 4, title: "Post 4" },
        { id: 5, title: "Post 5" },
      ],
    };
  },
};
</script>

<style scoped>
ul {
  margin-bottom: 30px;
}
</style>
