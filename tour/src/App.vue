<template>
  <div id="app">
    <input type="text" v-model="value" />
    <button @click.prevent="visiblite = !visiblite">点击</button>
    <Button wd="100px" ht="40px" types="danger"></Button>
    <VanPopup
      :visiblite.sync="visiblite"
      title="我的标题"
      :context="list"
      :close.sync="close"
      :confrg="true"
    >
    </VanPopup>

    <p @click="isShow = !isShow">提示弹窗</p>
    <Dialog
      :isShow.sync="isShow"
      title="我的标题"
      content="123123asdasdqawq"
      :confrg="true"
    ></Dialog>
    <transition
      name="bounce"
      appear
      appear-active-class="animated bounceInDown"
      enter-active-class="animated bounceInDown"
      leave-active-class="animated bounceInRight"
    >
      <div v-show="isBounce">12312312312312312312312</div>
    </transition>
    <button class="btn" @click.prevent="handClickAnimate">点击animate</button>
    <transition
      name="fade"
      @before-enter="handBeforEnter"
      @enter="handEnter"
      v-bind:css="false"
    >
      <div v-show="isList">哈哈哈哈</div>
    </transition>
    <button class="btn" @click.prevent="handClickToger">togge</button>
  </div>
</template>

<script>
import VanPopup from "./components/Popup";
import Button from "./components/Button";
import Dialog from "./components/Dialog";
export default {
  name: "App",
  components: {
    VanPopup,
    Button,
    Dialog,
  },
  data() {
    return {
      visiblite: false,
      close: true,
      value: "",
      list: ["1231", "12312321", "asdasd"],
      isShow: false,
      isBounce: false,
      isList: false,
    };
  },
  created() {
    // ?. 可选链用于判断当前对象的引用是否是null或者undefined 如果不是，则会短路运算直接返回undefened
    // const admin = {
    //   name: {
    //     age: 18
    //   }
    // };
    // console.log(admin.name?.age);
    // console.log(admin?.name);
    // const func = ()=>{
    //   console.log("func");
    // }
    // func?.()
    // const relsut = {
    //   customMethod: null
    // }
    // relsut?.customMethod?.();
    // const arr = [1,2,3,4,5,6];
    // console.log(arr?.[5]);
    // const obj = {
    //   name: "chen",
    //   age: 19
    // };
    // console.log(obj?.["name"]);
    // 和空值合并操作符一起使用
    // const custom = {
    //   name: "chen",
    //   age: 20,
    //   adders: null,
    // };
    // let customet = custom?.city ?? "暗影之城";
    // console.log(customet);
    // const newObj = {
    //   name: "chen"
    // }
    // console.log(newObj?.age??18);
    // const func1 = undefined;
    // const func2 = ()=>{
    //   console.log("func2");
    // }
    // func1??func2();

    // function A() {
    //   console.log("函数 A 被调用了");
    //   return undefined;
    // }
    // function B() {
    //   console.log("函数 B 被调用了");
    //   return false;
    // }
    // function C() {
    //   console.log("函数 C 被调用了");
    //   return "foo";
    // }
    // console.log(A() ?? C());
    // // 依次打印 "函数 A 被调用了"、"函数 C 被调用了"、"foo"
    // A() 返回了 undefined，所以操作符两边的表达式都被执行了
    // console.log(B() ?? C());
    // 依次打印 "函数 B 被调用了"、"false"
    // B() 返回了 false（既不是 null 也不是 undefined）
    // 所以右侧表达式没有被执行
  },
  methods: {
    handClickAnimate() {
      this.isBounce = !this.isBounce;
    },
    handBeforEnter(el) {
      el.style.color = "red";
    },
    handEnter(el, done) {
      setTimeout(() => {
        el.style.color = "blue";
      }, 2000);
      done();
    },
    handClickToger() {
      this.isList = !this.isList;
    },
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
</style>
