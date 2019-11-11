<template>
  <div class="detail">
    <van-swipe :loop="false" :height="412.5">
      <van-swipe-item v-for="(image, index) in swiper_img[0]" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <img class="guanggao" src="../assets/cart/88d151f4e7a19745d52285b34da09776.jpg" alt="广告图" />
    <div class="overview-goods-name">Redmi Note 8</div>
    <div class="goods-brief">
      <mark v-text="detaillight[0]"></mark>
      <span v-text="detail[0]"></span>
    </div>
    <div class="product_info_product_price">
      <div class="goods-price">￥1299</div>
    </div>
    <!-- 配置 -->
    <van-grid>
      <van-grid-item v-for="(img,index) in configuration_img" :key="index">

        <!--法一： data里面的属性 -->
        <img :src="configuration_img[index]"/> 
        <!--法二： 函数 -->
        <!-- <img :src="configurationfn[index]" />   -->

        <em v-text="configuration_name[index]"></em>
        <i v-text="configuration_con[index]"></i>
      </van-grid-item>
    </van-grid>
    <!-- 已选信息 -->
    <div class="collinf">
      
      <div class="weui-panel__bd">
                <div class="weui-media-box weui-media-box_small-appmsg">
                    <div class="weui-cells">
                        <a class="weui-cell weui-cell_access weui-cell_example" href="javascript:;">
                            <div class="weui-cell__hd">
                              <span class="first">已选</span>
                            </div>
                            <div class="weui-cell__bd weui-cell_primary">
                                <p class="txt">Redmi Note 8 Pro 6GB+128GB 冰翡翠 x 1</p>
                            </div>
                            <span class="weui-cell__ft"></span>
                        </a>
                        <a class="weui-cell weui-cell_access weui-cell_example" href="javascript:;">
                            <div class="weui-cell__hd">
                              <span class="first">送至</span>
                            </div> 
                            <div class="weui-cell__bd weui-cell_primary">
                                <p class="txt">北京市 东城区</p>
                            </div>
                            <span class="weui-cell__ft"></span>
                        </a>
                    </div>
                </div>
            </div>
    </div>
    <!-- 商品导航 -->
    <GoodsAction/>
    <!-- 商品规格 -->
    <Sku/>
  </div>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";
import { Lazyload } from "vant";
import { Grid, GridItem } from "vant";
import { Icon } from "vant";
import GoodsAction from "../components/GoodsAction.vue";
import Sku from '../components/Sku.vue';


Vue.use(Icon);
Vue.use(Grid).use(GridItem);
// Vue.use(Lazyload,options);  options 为可选参数，无则不传
Vue.use(Lazyload);
Vue.use(Swipe).use(SwipeItem);
export default {
  data() {
    return {
      swiper_img: [
        [
          "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b95eb3cbcecff33493a11cb0fc6d8df8.jpg",
          "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/4582cdfa732e2bfb5bb9bede10da7d16.jpg",
          "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9977e24825a323e9a67311ab93436fe1.jpg",
          "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/6cb62b49a519c321b7dbac7141ad63bc.jpg",
          "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b1a7d9b4add24bafbafd965038ac565b.jpg",
          "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b1a7d9b4add24bafbafd965038ac565b.jpg",
          "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/61e1ad5f1482aab3a2c298b36b02807b.jpg",
          "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/eafaf2a190a24c4f36410093b24b0700.jpg",
          "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/cacfdfec6f3adbec3326bc5877b86efb.jpg"
        ],
        [
          "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8b05cf540d6b5ece4eb118ee0e8190fd.jpg",
          "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/544606eafa79b7870ee48329571fbef2.jpg",
          "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/544606eafa79b7870ee48329571fbef2.jpg",
          "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/e2d10fb82dcd525351085444dd21effe.jpg"
        ]
      ],
      detaillight: [
        "「6GB+128GB闪降100元，秒杀价仅需1499元，付款成功即可参与抽奖，最高赢75英寸电视」",
        "「4800万四摄小金刚，标配18W快充，付款成功可参与抽奖，最高赢75英寸小米电视」"
      ],
      detail: [
        "6400万旗舰级全场景四摄 / 前置2000万 AI美颜相机 / G90T专业游戏芯片，液冷散热 / 6.53英寸水滴全面屏 / 4500mAh大电量 / 标配18W快充 / 康宁大猩猩保护玻璃 / 多功能NFC / 红外遥控功能 / Game Turbo2.0游戏加速",
        "4800万全场景四摄 / 前置1300万美颜相机 / 骁龙665处理器 / 4000mAh超长续航 / 标配18W快充 / 超线性扬声器 / 90%高屏占比 / 康宁大猩猩保护玻璃 / 6.3英寸水滴全面屏"
      ],
      //配置
      configuration_name: [
        "CPU",
        "四摄像头",
        "超大屏",
        "屏幕分辨率",
        "高清",
        "存储容量",
        "超长待机",
        "运营商网络",
        "网络模式"
      ],
      configuration_con: [
        "骁龙665八核",
        "4800万+800万+200万+200万像素",
        "6.3英寸",
        "2340×1080",
        "4GB",
        "64GB",
        "4000mAh",
        "4G全网通",
        "双卡双待"
      ],
      // , configuration_img:['../assets/detail/']
      configuration_img: []
    };
  },
  created() {
    this.configurationfn();
  },
  components:{
    GoodsAction,
    Sku
  },
  methods: {
    configurationfn(){ //或者
        let _ = this;
        for (let i = 1; i < 10; i++) {
          _.configuration_img.push(
            require('../assets/detail/ic' + i + '.png')
          );
        }
        return this.configuration_img;
      }
    },
  computed:{     //必须有返回值
    //  configurationfn: function (){
    //    let _ = this;
    //   for (let i = 1; i < 10; i++) {
    //     _.configuration_img.push(
    //       require('../assets/detail/ic' + i + '.png')
    //     );
    //   }
    //   return this.configuration_img;
    // }
  }
};
</script>
<style scoped lang="scss">
@function vw($px) {
  @return ($px / 375) * 100vw;
}


.detail {
  margin-bottom: vw(52);
  .guanggao {
    height: vw(45.1);
  }
  .overview-goods-name {
    padding: vw(16.7) vw(16.7) 0;
    font-size: vw(20);
    line-height: vw(31);
  }
  .goods-brief {
    padding: 0 vw(16.7);
    mark {
      color: rgb(255, 74, 0);
      font-size: vw(13);
      line-height: vw(14);
      background: #fff;
    }
    span {
      font-size: vw(13);
      line-height: vw(14);
      background: #fff;
      color: rgba(0, 0, 0, 0.54);
    }
  }
  .product_info_product_price {
    padding: 0 vw(16.7) vw(16.7);
    .goods-price {
      padding-top: vw(5.4);
      font-size: vw(23);
      color: #ff6700;
      line-height: vw(25);
    }
  }
  /deep/ .van-grid-item__content{
    padding: 0 vw(4.1) !important;
    text-align: center;
  }
  .van-grid {
    overflow: scroll;
    flex-wrap: nowrap;
    img {
      width: vw(20.8);
      height: vw(20.8);

    }
    em{
      display: inline-block;
      color: #676767;
      padding: vw(4.16) 0;
      font-size: vw(12);
      line-height: vw(13);
      text-align: center;

    }
    i{
      display: inline-block;
      color: #676767;
      font-size: vw(12);
      line-height: vw(13);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 100%;
      text-align: center;
    }
  }
  .collinf{
    margin: vw(30) vw(16.7) 0;
    .weui-panel__bd{
      .weui-cells{
        background-color: #fafafa;
        border-radius: vw(10)
      }
      .weui-cell{
        padding: vw(12.5);

      }
      .first{
        margin-right: vw(15.6);
        font-size: vw(12);
        color: rgba(0,0,0,.54);
      }
      .txt{
        font-size: vw(12);
        color: rgba(0,0,0,.87);
      }
    }
  }
  
}
</style>
