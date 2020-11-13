<template>
  <div class="pupop">
    <!--蒙层-->
    <transition name="fade">
      <div class="pupop-maska" v-show="visiblite" @click="handClickMaska"></div>
    </transition>
    <transition name="slide">
      <div class="pupop-content" v-show="visiblite">
        <div class="pupop-btn">
          <slot name="pupop-title">
            <p class="pupop-title">
              <slot name="close">
                <span class="close" v-if="close" @click="handClickClose"
                  >取消</span
                >
              </slot>
              <slot name="title">
                <span class="title">{{ title }}</span>
              </slot>
              <slot name="cponfrg">
                <span class="confrg" v-if="confrg" @click="handClickConfrg"
                  >确定</span
                >
              </slot>
            </p>
          </slot>
          <slot name="pupop-context">
            <ul class="context">
              <li class="context-li" @click="handClickActive" v-for="item of context" :key="item">
                {{ item }} <span :class="isshow?'active':'lowactive'">✔</span>
              </li>
            </ul>
          </slot>
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
    title: {
      type: String,
      required: false,
      default: "",
    },
    context: {
      type: [String, Array, Object],
      required: false,
      defualt: "",
    },
    close: {
      type: [Boolean, Function],
      required: false,
      default: false,
    },
    confrg: {
      rype: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      isshow: false
    }
  },
  methods: {
    handClickMaska() {
      this.$emit("update:visiblite", false);
    },
    handClickClose() {
      this.$emit("update:visiblite", false);
    },
    handClickConfrg() {
      this.$emit("update:visiblite", false);
    },
    handClickActive(){
      this.isshow = !this.isshow;
    }
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
  transition: opacity 0.3s;
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
  border-radius: 12px 12px 0 0;
}
.pupop-btn {
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.pupop-title {
  width: 100%;
  border-bottom: 1px #f5f6f8 solid;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.pupop-title .close,
.confrg {
  flex: 20%;
  text-align: center;
}
.pupop-title .title {
  flex: 60%;
  text-align: center;
}
.context {
  list-style-type: none;
}
.active {
  padding-left: 10px;
  color: aquamarine;
}
.lowactive {
  padding-left: 10px;
  color: #ccc;
}
</style>