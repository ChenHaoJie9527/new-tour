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
  width: 750px;
  height: 90px;
  display: flex;
  align-items: center;
  background: @bgColor;
  color: #fff;
  .header-left {
    width: 50px;
    text-align: center;
    margin-left: 10px;
    i{
      font-size: 20px;
    }
  }
  .header-input {
    flex: 1;
    background: #fff;
    border-radius: 10px;
    height: 60px;
    margin-left: 10px;
    color: #ccc;
    line-height: 60px;
    text-indent: 10px;
  }
  .header-right {
    width: 100px;
    text-align: center;
  }
}
</style>