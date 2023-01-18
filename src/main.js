import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "normalize.css";
import App from "./App.vue";
import "./style/normal.scss";
const app = createApp(App);
app.use(ElementPlus);
app.mount("#app");
