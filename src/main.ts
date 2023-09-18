import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router/index';

// reset css
import 'modern-normalize';
import '@/style/style.css';

// 阿里图标库
import './assets/iconfont/iconfont.css';

const app = createApp(App);
app.use(router);
app.mount('#app');

// 测试提交
