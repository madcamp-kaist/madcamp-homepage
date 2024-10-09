import 'whatwg-fetch';
import { createApp } from 'vue';
import App from './App.vue';
import { createMetaManager } from 'vue-meta';
import router from './router';

const app = createApp(App);

const metaManager = createMetaManager();
app.use(metaManager);
app.use(router);
app.mount('#app');
