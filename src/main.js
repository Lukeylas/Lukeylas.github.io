/**
 * Vue
 */
import { createApp } from 'vue';
import App from './App.vue';
const app = createApp(App);

/**
 * Pinia
 */
import { createPinia } from 'pinia';
const pinia = createPinia();
app.use(pinia);

/**
 * Quasar
 */
import { Quasar } from 'quasar';
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

app.use(Quasar, {
    plugins: {},
});

/**
 * Mount build
 */
import './style.css';
app.mount('#app');