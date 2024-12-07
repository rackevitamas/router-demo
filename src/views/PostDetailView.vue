<template>
  <div class="post-detail">
    <h1>This is a post page</h1>
    <p>Display the context of the post with ID: {{ $route.params.id }}</p>
    
    <div>
      <button @click="showPostId">Show Post ID</button>
    </div>
    <div>
      <button @click="goHomeIn3Seconds">Go Home in 3 seconds</button>
    </div>
    <div>
      <button @click="goToFirstPost">Go to first post</button>
    </div>
    
    <p><RouterLink to="/posts">&lt; Back</RouterLink></p>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const showPostId = () => {
  alert(`The ID of this post is: ${route.params.id}`);
};

const goHomeIn3Seconds = () => {
  setTimeout(() => {
    router.push({ name: 'home' });
  }, 3000);
};

const goToFirstPost = () => {
  router.push({
    name: 'postDetail',
    params: {
      id: 1,
    },
  });
};
</script>

<style scoped>
.post-detail {
  padding: 20px;
}

button {
  margin: 10px 0;
  padding: 10px 15px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #339966;
}

p {
  margin-top: 15px;
}
</style>
