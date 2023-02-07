import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import mitt from "mitt";

const app = createApp(App)

const emitter = mitt();
app.config.globalProperties.$emitter = emitter;

app.use(store)
app.use(router)
app.mount('#app')

