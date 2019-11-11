<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">-->
    

     <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
    <!-- 底部 -->
    <Tabbar v-show="show"/>
  </div>
</template>

<style lang='scss'>

// @function vw($px) {
//   @return ($px / 750) * 100vw;
// }
</style>
<script>

import Tabbar from "./components/Tabbar.vue";


import { Sticky } from 'vant';
import Vue from 'vue';
Vue.use(Sticky);

export default {
  data(){
    return{
      show:true

    }
  },
  name: "app",
  // created(){ //切换页面不会再变化，此路不通
  //   this.showfn();
  // },
  methods:{
     showfn(){
        let href = location.href;
        let _ = this;
        // window.console.log('url:',location.href+"  随机数："+parseInt(Math.random()*100),this.$route.path);//获取url
       //逻辑哪里出问题
        if((href.indexOf('home')||href.indexOf('sort')||href.indexOf('mine')||href.indexOf('goodcar'))!=-1){
          _.show = true;

          window.console.log('状态： true');
        }else{
          _.show = false;
          window.console.log('状态：false');
        }
    }
  },
  watch:{
    // router: function(){
    //     let href = location.href;
    //     let _ = this;
    //     window.console.log('url:',location.href+"  随机数："+parseInt(Math.random()*100));//获取url
    //     if((href.indexOf('home')||href.indexOf('sort')||href.indexOf('mine')||href.indexOf('goodcar'))!=-1){
    //       _.show = true;

    //       window.console.log('状态： true');
    //     }else{
    //       _.show = false;
    //       window.console.log('状态：false');
    //     }
    // }
    '$route':'showfn' //监听路由  showfn是方法
  },
  components: {
    // Search,
    // Tab,
    // Swipe,
    // Grid,
    Tabbar
    // HomeGrid
  }
};
</script>

