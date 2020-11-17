<template>
  <div class="home">
    <div>{{ val }}</div>
    <button @click.prevent="_debounce">点击</button>
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
    };
  },
  created() {
    // console.log(Boolean(NaN));
    // const n1 = 1; // 小数点后面没有数字，当成整数 1 处理
    // const n2 = 10.0; // 小数点后面是零，当成整数 10 处理
    // Number() parseInt() parseFloat()
    // console.log(parseInt(".1"));
    // this._DB = ld.debounce(this.handClickBtn, 1000, false);
    // console.log(ld);
    this._DB = useDebounce(this.handClickBtn);
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