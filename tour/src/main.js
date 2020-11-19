import Vue from 'vue'
import App from './App.vue'
import Animate from "animate.css";
import router from "./router/index";
import "./assets/styles/reset.css";
import "./assets/styles/border.css";
import "./assets/styles/iconfont.css";
// import fastClick from "fastclick";
// import "./hooks/useCompact";
// import "./hooks/useGetArray";
Vue.config.productionTip = false
Vue.use(Animate);
// fastClick.attach(document.body);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')