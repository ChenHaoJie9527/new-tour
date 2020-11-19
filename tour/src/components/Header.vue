<template>
  <div class="header">
    <div class="header-left">
      <i class="iconfont icon-zuojiantou"></i>
    </div>
    <div class="header-input">
      <i class="iconfont icon-search"></i>
      <span>输入城市/景点/游玩主题</span>
    </div>
    <div class="header-right">
      <span>城市</span>
      <i class="iconfont icon-xiajiantou"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="less">
@import "../assets/styles/varible.les";
.header {
  height: 0.86rem;
  display: flex;
  align-items: center;
  background: @bgColor;
  color: #fff;
  .header-left {
    width: 0.64rem;
    text-align: center;
    margin-left: 0.1rem;
  }
  .header-input {
    flex: 1;
    background: #fff;
    border-radius: 0.1rem;
    height: 0.64rem;
    margin-left: 0.1rem;
    color: #ccc;
    line-height: 0.64rem;
    text-indent: 0.1rem;
  }
  .header-right {
    width: 1.24rem;
    text-align: center;
  }
}
</style>