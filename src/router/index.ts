import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录',
      keepAlive: true,
      requireAuth: false,
    },
    component: () => import('@/pages/LoginPage.vue'),
  },
  {
    path: '/home',
    name: 'HomePage',
    meta: {
      title: 'home',
      keepAlive: true,
      requireAuth: true,
    },
    component: () => import('@/pages/HomePage.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
