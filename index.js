import App from "./App.js";
import { routes } from "./routes.js";

const { createApp } = Vue;
const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
});
const app = createApp(App)

app.use(router);
app.mount('#app');