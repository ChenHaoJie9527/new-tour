<template>
  <div id="app">
    <input type="text" v-model="value" />
    <button @click.prevent="visiblite = !visiblite" >
      点击
    </button>
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
    <Dialog :isShow.sync="isShow" title="我的标题" content="123123asdasdqawq" :confrg="true"></Dialog>
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
    Dialog
  },
  data() {
    return {
      visiblite: false,
      close: true,
      value: "",
      list: ["1231", "12312321", "asdasd"],
      isShow: false
    };
  },
  methods: {},
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
</style>
