import BlogDetail from '@/views/BlogDetail/BlogDetailView.vue';
import Home from '@/views/Home/HomeView.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    children: [
      {
        path: '',
        component: Home,
      },
      {
        path: 'blog/:id',
        component: BlogDetail,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;