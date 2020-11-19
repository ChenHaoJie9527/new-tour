<template>
  <div class="wrapper">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="(item, index) of imgData" :key="index">
        <img class="swiper-img" :src="item" alt="" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { useBannerImage } from "../hooks/useBannerImage";
export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperOptions: {
        autoplay: 2000,
        loop: true,
      },
      imgData: null,
    };
  },
  created() {
    this.imgData = useBannerImage("baners");
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
};
</script>

<style lang="less" scoped>
.wrapper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 31.25%;
  background: #eee;
  .swiper-img {
    width: 100%;
    object-fit: cover;
  }
}
</style>