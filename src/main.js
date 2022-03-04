import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vantComponents from '@/core/components_use';
import usePlug from '@/core/lazy_use';

const app = createApp(App);

vantComponents(app)
usePlug(app)

app.use(store).use(router).mount('#app')
