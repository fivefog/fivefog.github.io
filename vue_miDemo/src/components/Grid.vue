<template>
  <van-grid icon-size="64px" :border="false" :column-num="5">
    <van-grid-item v-for="(ic,value) in iconImgs" :key="value" :icon="ic" />
  </van-grid>
</template>

<script>
import Vue from "vue";
import { Grid, GridItem } from "vant";

Vue.use(Grid).use(GridItem);
export default {
  data() {
    return {
      iconImgs: [
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb65daec7ef7b52cc785f88f78efba37.png?thumb=1&w=144&h=152",
        "https://i8.mifile.cn/v1/a1/eb5024fe-dfe3-6e53-3e18-675bef5fa06e.webp",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6eb2a9a73687e007daf30fc3f85e0ad2.gif",
        "https://i8.mifile.cn/v1/a1/e8bc849a-0a3b-21a0-6810-7da3a3903dee.webp",
        "https://i8.mifile.cn/v1/a1/7dbcbf87-6a58-adb6-2f3f-bb3dae3e9c80.webp",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bc1c677a6e10e42d00fb0a063662fbf9.png?thumb=1&w=144&h=152",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b14da225c4156d5ce9a78e42a3a5a8e7.jpg?thumb=1&w=144&h=152",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ff6d920e80a63e80edb21febdb266448.png?thumb=1&w=144&h=152",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7a4943684b6c577a6a0b9b141633f6bd.png?thumb=1&w=144&h=152",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f11f9df6b0b0b428f8c8fc3267131830.png?thumb=1&w=144&h=152"
      ]
    };
  }
};
</script>

<style lang="scss" >
@function vw($px) {
  @return ($px / 375) * 100vw;
}
.van-grid-item__content {
  /*此处有 scoped 就无法覆盖原来的padding*/
  padding: 0px !important;
  box-sizing: content-box;
  width: vw(75);
  /* height: 64px; */
  .van-icon__image {
    width: vw(75);
    height: vw(79);
  }
}
</style>