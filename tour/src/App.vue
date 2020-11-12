<template>
  <div id="app">
    <button @click.prevent="visiblite = !visiblite">点击</button>
    <VanPopup :visiblite.sync="visiblite">
      弹窗拉起
    </VanPopup>
  </div>
</template>

<script>
import VanPopup from "./components/Popup";
export default {
  name: "App",
  components: {
    VanPopup,
  },
  data() {
    return {
      visiblite: false,
    };
  },
};
</script>

<style>
</style>
