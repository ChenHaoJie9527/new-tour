<template>
  <div class="pupop">
    <!--蒙层-->
    <transition name="fade">
      <div class="pupop-maska" v-show="visiblite" @click="handClickMaska"></div>
    </transition>
    <transition name="slide">
      <div class="pupop-content" v-show="visiblite">
        <div class="pupop-btn">
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "van-popup",
  props: {
    visiblite: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  methods: {
    handClickMaska() {
      // this.visiblite = !visiblite;
      this.$emit("update:visiblite", false);
    },
  },
};
</script>

<style scoped>
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.slide-enter,
.slide-leave-active {
  transform: translate3d(0, 100%, 0);
}

.pupop-maska {
  background: #4b4b4b;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
}

.pupop-content {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  background: #fff;
  transition: transform 0.3s;
}
.pupop-btn {
  width: 100%;
  height: 300px;
}
</style>