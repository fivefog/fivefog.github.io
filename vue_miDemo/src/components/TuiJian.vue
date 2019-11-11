<template>
  <div>
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img :src="image" />
      </van-swipe-item>
    </van-swipe>
    <!-- 宫格 -->
    <van-grid icon-size="64px" :border="false" :column-num="5">
      <van-grid-item v-for="(ic,value) in iconImgs" :key="value" :icon="ic" />
    </van-grid>
    <!-- 商品 -->
    <div>
      <!-- 手机列表 -->
      <div class="phonebox">
        <div class="phonelist">
          <div class="phoneli" v-for="(pli,index) in tuijian" :key="index" @click="toDetail(index)">
            
            <img :src="imgComputed[index]" />
            <!-- <img :src="phoneimg[index]" alt /> -->

            <div class="info">
              <div class="name" v-text="pli.p_name"></div>
              <div class="brief" v-text="pli.p_brief"></div>
              <div class="price" v-text="'￥'+pli.p_price">
                <span>起</span>
              </div>
              <div class="buybtn mauto">立即购买</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import axios from "axios";
import { Swipe, SwipeItem } from "vant";
import { Grid, GridItem } from "vant";

Vue.use(Grid).use(GridItem);
Vue.use(Swipe).use(SwipeItem);
export default {
  data() {
    return {
      images: [
        require("../assets/tuijian/1.jpg"),
        require("../assets/tuijian/2.jpg"),
        require("../assets/tuijian/3.jpg")
      ],
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
      ],
      phoneimg: [
        // require("../assets/tuijian/p1.jpg")
      ],
      tuijian: []
      // phone_list:[]
    };
  },
  created() {
    this.onLoad();
    // this.imgComputed();
  },
  methods: {
    //获取推荐数据表的数据
    onLoad() {
      axios.get("http://localhost:3000/tuijian").then(({ data }) => {
        this.tuijian = data;
      });
    },
    toDetail(index){   //跳转到详情页
      this.$router.push({
        name:'detail',
        // 带参跳转
        params:{id:index}, //   /detail/2
        query:{ name:"xiaoli"} //  /detail/2?name=xiaoli
      })
    }
    // imgComputed() {   //可删
    //   // let _ = this;
    //   window.console.log('tuijian:',this); //拿不到this.tuijian,为什么？？

    //   // for (var n = 0; n < this.tuijian.length; n++) {
    //   //   _.phoneimg.push(
    //   //     'require("../assets/tuijian/' + _.tuijian[n].phone_img + ')"'
    //   //   );
    //   //   // _.phoneimg.push(_.tuijian[n].phone_img)
    //   // }
    //   // return this.phoneimg;
    // }
  },
  computed: {
    imgComputed: function (){
        let _ = this;

        for(var n = 0; n < this.tuijian.length; n++){
          _.phoneimg.push(
          require("../assets/tuijian/"+ _.tuijian[n].phone_img)
        );
        }
        return this.phoneimg;
    }
  }
  
};
</script>
<style lang='scss'>

@function vw($px) {
  @return ($px / 375) * 100vw;
}
.van-swipe__track {
  .van-swipe-item {
    img {
      width: vw(375);
    }
  }
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
.phonelist {
  //一行（两个商品）
  padding: vw(6.25);
  display: flex;
  justify-content: space-around;
  // width: vw(375);
  flex-wrap: wrap;
  .phoneli {
    width: vw(179.1);
    img {
      width: 100%;
    }
    .info {
      text-align: center;
      padding: 0.2rem 0.27rem;
      .name {
        font-size: 15px;
        color: rgba(0, 0, 0, 0.87);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .brief {
        margin-top: 0.06rem;
        font-size: 14px;
        line-height: 15px;
        color: rgba(0, 0, 0, 0.54);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .price {
        font-size: 14px;
        color: #ea625b;
        height: 15px;
        line-height: 15px;
        position: relative;
        display: inline-block;
      }
      .buybtn {
        margin: 0 auto;
        width: vw(104);
        background: #ea625b;
        border-radius: 0.05rem;
        text-align: center;
        color: #fff;
        font-size: 14px;
        padding: 8px 0;
        font-weight: 700;
      }
    }
  }
}
</style>