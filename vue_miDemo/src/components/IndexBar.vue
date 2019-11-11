<template>
  <!-- 分类的楼层跳跃 -->
  <div class="indexBar">
    <div class="left_con">
      <ul class="floorname">
        <li v-for="(fn,index) in indexList" :key='index' v-text="fn" ref="indexli"></li>
    </ul>
    </div>
    <div class="right_con">

      <!-- 新品 -->
      <div v-for="(fn,index) in indexList" :key='index' :class="['floorsort',('floor'+index)]" >
        <div class="floorcon clearfix">
          <img :src="sort_bigimg[0]" class="sort_bigimg" alt="">
          <div class="category_title">
            <span>手机</span>
          </div>
          <div class="category_group clearfix">
              <div class="product" v-for="(p,index) in prouct_phone" :key="index">
                <img :src="p" alt="">
                <div class="name" v-text='prouct_phonen[index]'></div>
              </div>
              
          </div>
        </div>
      </div>
    </div>
    
  </div>
  <!-- <van-index-bar :index-list="indexList">
    <van-index-anchor index="1">标题1</van-index-anchor>
    <van-cell title="文本" />
    <van-cell title="文本" />
    <van-cell title="文本" />

    <van-index-anchor index="2">标题2</van-index-anchor>
    <van-cell title="文本" />
    <van-cell title="文本" />
    <van-cell title="文本" />
  </van-index-bar> -->
</template>

<script>
import axios from 'axios'
// import Vue from 'vue';
// import { IndexBar, IndexAnchor } from 'vant';

// Vue.use(IndexBar).use(IndexAnchor);
export default {
    data() {
      return {
        // indexList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        indexList:[],
        sort_bigimg:['//cdn.cnbj1.fds.api.mi-img.com/mi-mall/1d6da58632d47ef4098eea9e40478bdd.jpg?thumb=1&w=500&h=200',
                      '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f0f406bce8e8f1f01468853e48d73a84.png?thumb=1&w=500&h=200',
                      '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/17dbc837b82de528f8f4abf4ede0753a.jpg?thumb=1&w=500&h=200',
                      ],
        prouct_phone:[],
        prouct_phonen:[]
      }
    },
    created(){
      this.onLoad();
      this.indexClick();
    },
    methods:{
      onLoad(){
        axios.get('http://localhost:3000/sort')
        .then(({data}) => {
          //遍历数据
          for(let list of data){  //切记for in 遍历得下标！
          // window.console.log('list',list);
            //将分类名作为索引
            if(list.sort_name){
              this.indexList.push(list.sort_name);

            }
            if(list.phone_img){
              this.prouct_phone.push(list.phone_img);
            }
            if(list.phone_name){
              this.prouct_phonen.push(list.phone_name);
            }
          }
            
        })
      },
      indexClick(){
          window.console.log(this.$refs.indexli);

        // for(var i = 0; i<this.$refs.indexli.length;i++){
        //   window.console.log(i);
        // }
      }
    }
}
</script>

<style lang="scss" scoped>

    @function vw($px) {
      @return ($px / 375) * 100vw;
    }
    // .van-index-bar{
    //     .van-index-bar__index{
    //       display: inline-block;
    //       width: vw(78);
    //       height: vw(47);
    //     }
    // }
    .clearfix::after{
        content:"";
        clear:both;
        display:block;
        overflow:hidden;
        visibility:hidden;
    }
     .indexBar{
       width:vw(375);
       margin-top: vw(50);
        display: flex;
        .left_con{
          float: left;
            padding: vw(10.4) vw(14) vw(10.4) 0;
            .floorname{
              
              // position: fixed;
              // top: vw(50);
              // bottom: vw(50);
              // left: 0;
              width: vw(78);
              border-right: vw(1) solid #efefef;
              overflow: hidden;
              li{
                font-size: vw(14);
                height: vw(59.4);
                line-height: vw(59.4);
                text-align: center;
                overflow: hidden;
                color: #3c3c3c;
                width: vw(78);
              }
        }
        }
        .right_con{
          float: left;
          //  flex: 1;
           padding-right: vw(16.6);
           width: vw(262.5);
           overflow: hidden;
          .floorcon{
                
                .category_title {
                    // position: relative;
                    background: #fff;
                    font-size: vw(14);
                    text-align: center;
                    font-weight: 400;
                    margin-top: vw(10.4);
                    height: vw(66.6);
                    line-height: vw(66.6);
                    overflow: hidden;
                    ::before{
                      display: inline-block;
                      content: '';
                      width: vw(20);
                      height: vw(1);
                      background: #ccc;
                      // position: absolute;
                      // right:vw(15);
                      margin-right: vw(15);
                      margin-bottom: vw(5);
                    }
                    ::after{
                      display: inline-block;
                      content: '';
                      width: vw(20);
                      height: vw(1);
                      background: #ccc;
                      // position: absolute;
                      // right:vw(15);
                      margin-left: vw(15);
                      margin-bottom: vw(5);
                    }
                }
                .sort_bigimg{
                  width: vw(260);
                  height: vw(104);
                }
                .product {
                    float: left;
                    width: 33.333333333333336%;
                    text-align: center;
                    margin-top: vw(10.4);
                    margin-bottom: vw(15.6);
                    overflow: hidden;
                    img{
                      width: vw(52);
                      height: vw(52);
                    }
                    .name {
                        margin-top: vw(14.3);
                        white-space: nowrap;
                        font-size: vw(12);
                        color: rgba(0,0,0,.54);
                    }
                }
          }
        }  
     }   
</style>