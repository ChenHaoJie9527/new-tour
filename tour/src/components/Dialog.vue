<template>
  <div class="dialog">
    <transition name="fade">
      <div class="mask" v-show="isShow" @click="handClickMaska"></div>
    </transition>
    <transition name="slide">
      <div class="van-dialog" v-show="isShow">
        <slot name="default">
          <div class="dialog-box">
            <p class="title">{{ title }}</p>
            <p class="content">{{ content }}</p>
            <div class="dialog-btn">
              <div class="close" @click="handClickMaska">取消</div>
              <div v-if="confrg" class="confrg" @click="handClickMaska">确定</div>
            </div>
          </div>
        </slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "van-dialog",
  props: {
    title: {
      type: String,
      default: "",
    },
    content: {
      type: [String, Image],
      default: "",
    },
    close: {
      type: Boolean,
      default: false,
    },
    confrg: {
      type: Boolean,
      default: false,
    },
    isShow: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handClickMaska() {
      this.$emit("update:isShow", false);
    },
  },
};
</script>

<style>
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.5s;
}

.mask {
  background: #5b5b5b;
  opacity: 0.7;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
}
.van-dialog {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9;
  background: #fff;
  border: 1px #ccc solid;
  border-radius: 10px;
}
.dialog-box {
  width: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}
.dialog-box .title {
  width: 100%;
  text-align: center;
  padding: 10px 0px 4px 0px;
}
.dialog-box .content {
  width: 90%;
  text-align: center;
  border-bottom: 1px #f5f6f8 solid;
  padding: 10px;
}
.dialog-btn {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px;
  justify-content: space-around;
}
.dialog-btn .close {
  width: 50%;
  text-align: center;
  border-right: 1px #eee solid;
  color: #8c8c8c;
  cursor: pointer;
}
.dialog-btn .confrg {
  color: red;
  flex: 50%;
  text-align: center;
  cursor: pointer;
}
</style>