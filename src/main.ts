import App from '@/App.vue';
import '@/assets/scss/main.scss';
import router from '@/router';
import { createApp } from 'vue';

const appInstance = createApp(App);
appInstance.use(router);
appInstance.mount('#app');