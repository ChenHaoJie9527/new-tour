<template>
  <div id="app">
    <!-- <Header></Header> -->
    <router-view />
    <!-- <Footer>
      <template #default="{ foo }">
        <h2>You are {{ foo.id }}</h2>
      </template>
    </Footer> -->
    <!-- <div class="test-viewport">测试转换</div> -->
    <!-- <Button type="primary">点击</Button> -->
    <!-- <Tabs v-model="active">
      <Tab title="标签 1">内容 1</Tab>
      <Tab title="标签 2">内容 2</Tab>
      <Tab title="标签 3">内容 3</Tab>
      <Tab title="标签 4">内容 4</Tab>
    </Tabs> -->
    <!-- <div class="imgs-dpr"></div> -->

    <!-- <div class="box">
      <img
        alt=""
        srcset="
          ./assets/image/banners/xm.jpg 2x,
          ./assets/image/banners/zzt.jpg 3x,
          ./assets/image/banners/jn.jpg
        "
      />
    </div> -->
  </div>
</template>

<script>
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import { Button, Tab, Tabs } from "vant";
export default {
  name: "App",
  components: {
    // Header,
    // Footer,
    // Button,
    // Tab,
    // Tabs,
  },
  data() {
    return {
      active: 2,
    };
  },
  created() {},
  methods: {},
};
</script>

<style leng="less" scoped>
.test-viewport {
  width: 750px;
  height: 100px;
  font-size: 40px;
  text-align: center;
  line-height: 100px;
  background: #13b5b1;
}
@media only screen and (-webkit-min-device-pixel-ratio: 2) {
  .test-viewport {
    color: red;
  }
}
@media only screen and (-webkit-min-device-pixel-ratio: 3) {
  .test-viewport {
    color: #fff;
  }
}
.imgs-dpr {
  width: 400px;
  height: 400px;
  background: url("./assets/image/banners/bh.jpg") no-repeat;
  background-size: contain;
  background: -webkit-image-set(
    url("./assets/image/banners/bh.jpg") 1x,
    url("./assets/image/banners/ht.jpg") 2x,
    url("./assets/image/banners/jn.jpg") 3x
  );
  background: image-set(
    url("./assets/image/banners/bh.jpg") 1x,
    url("./assets/image/banners/ht.jpg") 2x,
    url("./assets/image/banners/jn.jpg") 3x
  );
}
.box{
  width: 200px;
  border: 2px solid rgba(150, 150, 150, 255);
  padding: 0.5em;
  word-break: break-all;
  img{
    width: 100%;
  }
}
/deep/ .van-tabs__wrap {
  height: 200px;
  border-bottom: 1px #ccc solid;
}
</style>
