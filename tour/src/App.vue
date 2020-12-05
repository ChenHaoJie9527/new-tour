<template>
  <div id="app">
    <Header></Header>
    <router-view />
    <Footer>
      <template #default="{ foo }">
        <h2>You are {{ foo.id }}</h2>
      </template>
    </Footer>
    <div class="test-viewport">测试转换</div>
    <Button type="primary">点击</Button>
    <Tabs v-model="active">
      <Tab title="标签 1">内容 1</Tab>
      <Tab title="标签 2">内容 2</Tab>
      <Tab title="标签 3">内容 3</Tab>
      <Tab title="标签 4">内容 4</Tab>
    </Tabs>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Button, Tab, Tabs } from "vant";
export default {
  name: "App",
  components: {
    Header,
    Footer,
    Button,
    Tab,
    Tabs,
  },
  data() {
    return {
      active: 2
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
/deep/ .van-tabs__wrap{
  height: 200px ;
  border-bottom: 1px #ccc solid;
}

</style>
