<template>
  <div id="app">
    <Header></Header>
    <router-view />
    <Footer>
      <template #default="{foo}">
        <h2>You are {{ foo.id }}</h2>
      </template>
    </Footer>
  </div>
</template>

<script>
import Header from "./components/Header";
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
