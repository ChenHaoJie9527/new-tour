import Vue from 'vue'
import App from './App.vue'
import Animate from "animate.css";
import router from "./router/index";
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
import "./assets/styles/reset.css";
import "./assets/styles/border.css";
import "./assets/styles/iconfont.css";
// import fastClick from "fastclick";
// import "./hooks/useCompact"; 13570968741
// import "./hooks/useGetArray";
// import "./hooks/useCloneObject";
// import "./hooks/useStatus";
// import "./hooks/useArray";
import "./hooks/a";
Vue.config.productionTip = false
Vue.use(Animate);
Vue.use(VueAwesomeSwiper);
// fastClick.attach(document.body);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')