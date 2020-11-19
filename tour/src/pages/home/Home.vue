<template>
  <div class="home">
  </div>
</template>

<script>
// import ld from "lodash";
import { useDebounce } from "../../hooks/useDebounce";
export default {
  name: "page-home",
  data() {
    return {
      val: "0",
      propsName: "",
    };
  },
  component: {
  },
  created() {
    this._DB = useDebounce(this.handClickBtn);
    // console.log(Boolean(NaN));
    // const n1 = 1; // 小数点后面没有数字，当成整数 1 处理
    // const n2 = 10.0; // 小数点后面是零，当成整数 10 处理
    // Number() parseInt() parseFloat()
    // console.log(parseInt(".1"));
    // this._DB = ld.debounce(this.handClickBtn, 1000, false);
    // console.log(ld);
    // 逻辑非 ! 先转换成布尔值再取反，相当于先调用Boolead函数再取反
    // console.log(!123123);
    // 双叹号 !! 相当于转换成布尔值，在取反的取反，也就是调用Boolead函数进行转换成布尔值
    // console.log(!!123);
    // let found = 0;
    // const someUndeclaredVariable = 1;
    // let result = found && someUndeclaredVariable; // 不会出错
    // console.log(result); // 会执行
    // console.log(Math.pow(3,2)); // 等价于 3 ** 2
    // console.log(3 ** 4); // ** 指数操作符
    // const str = "chj";
    // switch(true){
    //   case str.constructor == String:
    //     console.log(str);
    //   break;
    //   case str.constructor == Array:
    //   console.log(str);
    //   break;
    //   default:
    //     console.log("str is not string");
    //   break;
    // }
  
    // function setName(obj) {
    //   obj.name = "nickName";
    //   obj = new Object();
    //   obj.name = "ger";
    // }
    // let persion = new Object();
    // setName(persion);
    // console.log(persion.name);
  },
  methods: {
    handClickBtn() {
      this.val++;
      console.log("真正执行的函数---防抖函数");
    },
    _debounce() {
      console.log(`_debounce.....`);
      this._DB();
    },
  },
};
</script>

<style>
</style>