<template>
  <div>
    <div class="mine">
      <header>
        <div class="imgbox">
          <img src="../assets/mine/avatar.76a75b8f17.png" alt />
        </div>
        <div class="login" @click="toLogin()">登录/注册</div>
      </header>
      <div class="mainli clearfix">
        <div class="lileft fl">我的订单</div>
        <div class="liright fr">
          <a href="###" class="allorder">全部订单</a>
          <span class="icon"></span>
        </div>
      </div>
      <ul class="process">
        <li>
          <span class="iconfont icon-daifukuan"></span>
          <p>待付款</p>
        </li>
        <li>
          <span class="iconfont icon-shoucangtubiao-"></span>
          <p>待收货</p>
        </li>
        <li>
          <span class="iconfont icon-iconset0204"></span>
          <p>退换修</p>
        </li>
      </ul>
      <div class="mainbox clearfix">
        <div class="mainboxlist">

          <div class="mainboxli clearfix">
            <div class="lileft fl">
              <i class="iconfont icon-huiyuan-"></i>
              <span>会员中心</span>
            </div>
            <div class="liright fr">
              <span class="icon"></span>
            </div>
          </div>
          <div class="mainboxli clearfix">
            <div class="lileft fl">
              <i class="iconfont icon-wodeyouhuiquan-"></i>
              <span>我的优惠</span>
            </div>
            <div class="liright fr">
              <span class="icon"></span>
            </div>
          </div>
        </div>
        <div class="mainboxlist">

          <div class="mainboxli clearfix">
            <div class="lileft fl">
              <i class="iconfont icon-huiyuan-"></i>
              <span>服务中心</span>
            </div>
            <div class="liright fr">
              <span class="icon"></span>
            </div>
          </div>
          <div class="mainboxli clearfix">
            <div class="lileft fl">
              <i class="iconfont icon-wodeyouhuiquan-"></i>
              <span>小米之家</span>
            </div>
            <div class="liright fr">
              <span class="icon"></span>
            </div>
          </div>
        </div>
        <div class="mainboxlist">

          <div class="mainboxli clearfix">
            <div class="lileft fl">
              <i class="iconfont icon-huiyuan-"></i>
              <span>我的F码</span>
            </div>
            <div class="liright fr">
              <span class="icon"></span>
            </div>
          </div>
          <div class="mainboxli clearfix">
            <div class="lileft fl">
              <i class="iconfont icon-wodeyouhuiquan-"></i>
              <span>礼物吗兑换</span>
            </div>
            <div class="liright fr">
              <span class="icon"></span>
            </div>
          </div>
          
        </div>
        <div class="mainboxlist">

          <div class="mainboxli clearfix">
            <div class="lileft fl">
              <i class="iconfont icon-huiyuan-"></i>
              <span>设置</span>
            </div>
            <div class="liright fr">
              <span class="icon"></span>
            </div>
          </div>
         
          
        </div>
        <!-- <div class="mainboxlist">

      
         
          
        </div> -->
      </div>
    </div>
    <Tabbar />
  </div>
</template>

<script>
import Tabbar from "../components/Tabbar.vue";

export default {
  methods:{
    toLogin(){   //跳转到详情页
      this.$router.push({
        name:'login'
        // // 带参跳转
        // params:{id:index}, //   /detail/2
        // query:{ name:"xiaoli"} //  /detail/2?name=xiaoli
      })
    }
  },
    // data(){
    //     return {
    //         iconname:['icon-huiyuan-','icon-wodeyouhuiquan-','icon-fuwuzhongxin',
    //                   'icon-shangjia','icon-F','icon-liwu','icon-shezhi'],
    //         mainnane:['会员中心','我的优惠','服务中心'],
    //         iconarr:[]
    //     }
    // },
    // create(){
    //     this.minefn();
    // },
    // methods:{

    //     minefn(){
    //         window.console.log(this.iconname);
            
    //         for(let i=0;i<this.iconname.length;i+=2){
    //             return this.iconarr.push(this.iconname.slice(i,i+2));
    //         }
    //     }
    // },
  components: {
    Tabbar
  }
};
</script>

<style lang='scss' scoped>
@function vw($px) {
  @return ($px / 375) * 100vw;
}
header {
  padding: vw(16.7) 0;
  height: vw(50);
  background: #f37d0f;
  .imgbox {
    float: left;
    margin: 0 vw(8.3) 0 vw(16.7);
    width: vw(44);
    height: vw(44);
    overflow: hidden;
    box-sizing: border-box;
    border-radius: 50%;
    border: vw(3) solid hsla(0, 0%, 100%, 0.4);
    text-align: center;
    img {
      width: 100%;
    }
  }
  .login {
    float: left;
    color: #fff;
    font-size: vw(14);
    text-align: left;
    line-height: vw(50);
  }
}
.mainli {
  height: vw(40.6);
  border-bottom: vw(1) solid rgba(0, 0, 0, 0.15);
  color: rgba(0, 0, 0, 0.54);
  padding: 0 vw(16.7);
}
// 公共样式 start
.lileft {
  font-size: 14px;
  line-height: vw(40.6);
}
.liright {
  font-size: vw(12);
  line-height: vw(40.6);
  position: relative;
  &::after {
    /*制作三角形小图标*/
    content: "";
    top: 50%;
    transform: translateY(-50%);
    position: absolute;
    right: vw(-9);
    display: inline-block;
    //必须使宽高为零
    border: vw(9) solid transparent; //四个边的边框颜色为透明
    border-left-color: #ccc;
  }
  .icon {
    //上层小三角
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: vw(-6);
    z-index: 1;
    display: inline-block;
    border: vw(9) solid transparent;
    border-left-color: #fff;
  }
  .allorder {
    display: inline-block;
    margin-right: vw(18);
    color: rgba(0, 0, 0, 0.54);
  }
}
//   end
.process {
  display: flex;
  padding: 0 vw(41.7);
  justify-content: space-between;
  li {
    height: vw(88);
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    span {
      font-size: vw(25);
      display: block;
      margin: 0 vw(5.5) vw(8.33);
    }
    p {
      font-size: vw(14);
      color: rgba(0, 0, 0, 0.87);
    }
  }
}
.mainbox {
  background: #f5f5f5;
//   height: 300px;

  .mainboxlist {
    margin-top: vw(10.4);
    &:nth-last-child(1){
        margin-bottom: vw(52);
    }
    .mainboxli {
      &:nth-child(1) {
        margin-bottom: vw(3);
        position: relative;
        &::before{
            content: '';
            height: vw(3);
            position: absolute;
            width: vw(58.3);
            background: #fff;
            bottom: vw(-3);
            left: vw(0);
        }
      }
      height: vw(54);
      //   display: flex;
      //   justify-content: space-between;
      // align-content: center;
      color: rgba(0, 0, 0, 0.54);
      padding: 0 vw(16.7);
      background: #fff;
      .lileft,
      .liright {
        height: 100%;
        line-height: vw(54);
      }
      .iconfont {
        font-size: vw(22);
        margin-right: vw(16.7);
      }
    }
  }
}
</style>