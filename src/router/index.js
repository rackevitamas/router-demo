import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import PostsView from '../views/PostsView.vue';
import PostDetailView from '../views/PostDetailView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/posts',
      name: 'posts',
      component: PostsView,
    },
    {
      path: '/postsDetail/:id',
      name: 'postDetail',
      component: PostDetailView,
    },
  ],
});

export default router;
