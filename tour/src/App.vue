<template>
  <div id="app">
    <Header></Header>
     <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Heater";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style>
</style>
