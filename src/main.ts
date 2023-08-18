import App from '@/App.vue';
import '@/assets/scss/main.scss';
import router from '@/router';
import { key, store } from '@/store';
import 'animate.css';
import { createApp } from 'vue';
import 'vue3-toastify/dist/index.css';

const app = createApp(App);
app.use(router);
app.use(store, key);
app.mount('#app');