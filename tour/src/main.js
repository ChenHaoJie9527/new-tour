import Vue from 'vue'
import App from './App.vue'
// import { arrToObj, objToArr } from "./hooks/Hleper";
// const test1 = [{ id: 1, name: "asdsada" }, { id: 2, name: "sadasd" }];
// const result = arrToObj(test1);
// console.log(result);

// const result2 = objToArr(test1);
// console.log(result2)
import Animate from  "animate.css";
Vue.config.productionTip = false
Vue.use(Animate);
new Vue({
  render: h => h(App),
}).$mount('#app')
