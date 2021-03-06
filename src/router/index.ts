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
    redirect: '/welcome',
    meta: {
      title: 'home',
      keepAlive: true,
      requireAuth: true,
    },
    component: () => import('@/pages/HomePage.vue'),
    children: [
      { path: '/welcome', name: 'Welcome', component: () => import('@/components/Welcome.vue') },
      { path: '/order', name: 'Order', component: () => import('@/pages/order/Order.vue') },
      { path: '/user', name: 'UserManage', component: () => import('@/pages/userManage/UserManage.vue') },
      { path: '/masterManage', name: 'MasterManage', component: () => import('@/pages/masterManage/MasterManage.vue') },
      {
        path: '/accessoriesManage',
        name: 'AccessoriesManage',
        component: () => import('@/pages/accessoriesManage/AccessoriesManage.vue'),
      },
      {
        path: '/maintainCategoryManage',
        name: 'MaintainCategoryManage',
        component: () => import('@/pages/maintainCategoryManage/MaintainCategoryManage.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
