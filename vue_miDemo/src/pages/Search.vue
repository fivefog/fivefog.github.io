<template>
  <div class="searchpage">
      <header>
          <span class="iconfont icon-zuo"></span>
          <input type="search" name="" placeholder="搜索商品名称" >
          <span class="iconfont icon-sousuo"></span>  
      </header>
      <main>
          <p class="search-promotion-title">热门搜索</p>
          <img class="J_linksign-customize" src="../assets/tuijian/gg.jpg" alt="我只是一张广告图">  
          <div class="search-key">
              <a href="###" class="suoitem" v-for="(item,index) in suoitemname"
              :key="index" v-text="item" :style="{'border-color':borderColor[index],'background':background[index]}" />
          </div> 
          <p class="search-promotion-title">常用分类</p> 
          <div class="search_sort">
              <a href="###" class="sortitem" v-for="(item,index) in sortitemname" :key="index" v-text="item"></a>
          </div>
      </main>
  </div>
</template>
 
<script>
import Vue from "vue";
import { Search } from 'vant';

Vue.use(Search);
export default {
    data(){     
        return {
            sortitemname:['手机','电视','笔记本','盒子','路由器','平板','手表','VR','穿戴','空气净化器','空调','耳机'],
            suoitemname:['小米CC9 Pro','小米手表','小米9 Pro 5G','RedmiBook 14增强版','Redmi 8A','Redmi Note 8','小米手环4','压力IH电饭煲'],
            borderColor:['rgb(151, 194, 138)','rgb(250, 194, 136)','rgb(151, 194, 138)','rgb(250, 194, 136)','rgb(252, 160, 167)','rgb(252, 160, 167)','rgb(187, 208, 144)','rgb(187, 208, 144)'],
            background:['rgb(228, 245, 226)','rgb(252, 229, 205)','rgb(151, 194, 138)','rgb(252, 229, 205)','rgb(249, 234, 234)','rgb(249, 234, 234)','rgb(242, 246, 233)','rgb(242, 246, 233)']
        
        }
    },
    created(){
        this.ranbcolor()
    },
    methods:{
        ranbcolor(){
            window.console.log(this.suoitemname.length);
        },
        
    }
};
</script>

<style lang="scss" scoped>
@function vw($px){
    @return ($px /375) * 100vw;
}
    header{
        height: vw(41.6);
        background: #f2f2f2;
        display: flex;
        justify-content: space-around;
        align-items: center;
        input{
            padding: 0 vw(10.4);
            border: vw(1);
            width: vw(253);
            height: vw(24);
        }
        .icon-zuo{
            display: inline-block;
            font-size: vw(32);
            color: #777;
        }
        .icon-sousuo{
           display: inline-block;
            font-size: vw(28);
            color: #999; 
        }
    }
    main{
        .search-promotion-title{
            padding: 0 vw(15.6);
            font-size: vw(12);
            line-height: vw(41);
        }
        .J_linksign-customize{
            width: vw(375);
        }
        .search-key{
            margin: vw(5.2) vw(10.4);
            .suoitem{
                display: inline-block;
                border: vw(1) solid;
                margin: vw(5.2);
                padding: vw(7.3) vw(10.4);
                font-size: vw(12);
                color: rgb(72, 72, 72);
            }
        }
        .search_sort{
            margin: vw(5.2) vw(10.4);
            .sortitem{
                display: inline-block;
                padding: 0 vw(7.8);
                margin-right: vw(7.8);
                margin-bottom: vw(5.2);
                line-height: vw(28.6);
                font-size: vw(12);
                color: rgba(0,0,0,.54);
                background: #f5f5f5;
            }
        }
        
    }
</style>