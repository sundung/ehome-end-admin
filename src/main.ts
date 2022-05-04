import { createApp } from 'vue';
import App from './App.vue';
import store from './store'; // 创建vue实例
import router from '@/router';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import 'normalize.css'; // 重置样式
const app = createApp(App);
app.use(ElementPlus); // 挂载 element-plus
app.use(store); // 挂载状态管理器
app.use(router); // 挂载路由
app.mount('#app');
