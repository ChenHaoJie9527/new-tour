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
    <transition name="fade" @before-enter="handBeforEnter" @enter="handEnter" v-bind:css="false">
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
  methods: {
    handClickAnimate() {
      this.isBounce = !this.isBounce;
    },
    handBeforEnter(el) {
      el.style.color = "red";
    },
    handEnter(el, done) {
      setTimeout(()=>{
        el.style.color = "blue";
      },2000)
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
