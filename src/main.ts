import { createApp } from 'vue';
import App from './App.vue';
import store from './store'; // 创建vue实例
import router from '@/router';

const app = createApp(App); // 挂载pinia
app.use(store); // 挂载状态管理器
app.use(router); // 挂载路由
app.mount('#app');
