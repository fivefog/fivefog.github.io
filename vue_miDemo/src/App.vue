<template>
  <div id="app">
    <keep-alive>
      <!-- 路由匹配到的组件将渲染在这里 -->
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import { Sticky } from "vant";
import Vue from "vue";
Vue.use(Sticky);

export default {
  data() {
    return {};
  },
  name: "app",

  methods: {
    
  },
  watch: {
    // $route(to, from) {
    //   console.log("监听路由：", to.path);
    // }
    '$route':function(){
      window.console.log("监听路由：",data.$route.path)
    }
  },
  components: {}
};
</script>

