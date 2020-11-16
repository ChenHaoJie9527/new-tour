import Vue from 'vue'
import App from './App.vue'
import Animate from "animate.css";
import router from "./router/index";
import "./assets/styles/reset.css";
Vue.config.productionTip = false
Vue.use(Animate);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')