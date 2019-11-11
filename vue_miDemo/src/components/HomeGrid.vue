<template>
  <div>
    <!-- 多余的，可删 -->
    <!-- 手机宫格 -->
    <div class="phonebox">
        
      <div class="phonelist" >
        <div class="phoneli" v-for="(pli,index) in tuijian" :key='index'>
          <img :src="imgComputed"  />
          <!-- <img :src="phoneimg[0]" alt /> -->

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
</template>

<script>
// import Vue from 'vue';
// import { Grid, GridItem,image } from 'vant';

// Vue.use(Grid).use(GridItem).use(image);
import axios from 'axios'
export default {
  data() {
    return {
      phoneimg: [
        // require("../assets/tuijian/p1.jpg")
       
      ],
      tuijian:[],
      // phone_list:[]
    };
  },
  created(){
    
      this.onLoad();
      this.imgComputed();
  },
  methods: {
    //获取推荐数据表的数据
    onLoad(){
      
      axios.get('http://localhost:3000/tuijian')
      .then( ({data}) => {
        this.tuijian = data;
        // window.console.log(data);
    })
    },
    imgComputed(){
      let _ = this;
      // window.console.log('宫格图片：',this.tuijian); 
      for(var n=0;n<this.tuijian.length;n++){
        
       _.phoneimg.push('require("../assets/tuijian/'+_.tuijian[n].phone_img+')"')
        // _.phoneimg.push(_.tuijian[n].phone_img)

      }
      return this.phoneimg;
    }
  },
  computed:{
    // tuijianComputed(){
    //   // let result = [];
    //   let _ = this;
    //   let chunk = 2;
    //   for(let n=0;n<this.tuijian.length;n+=chunk){
    //     //  result.push(this.tuijian.slice(n,n+chunk));
    //     _.phone_list.push(this.tuijian.slice(n,n+chunk));
    //   }
    //   return this.phone_list;
    // }
    
  }
};
</script>
<style lang="scss" scoped>
  @function vw($px) {
    @return ($px / 375) * 100vw;
  }
.phonelist {  //一行（两个商品）
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
        border-radius: .05rem;
        text-align: center;
        color: #fff;
        font-size: 14px;
        padding: 8px 0;
        font-weight: 700;
}
    }
  }
  :first-child {
    // margin-right: 5px;
  }
}
</style>