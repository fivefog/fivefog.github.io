<template>
  <div class="weui-grids">
    <a href="javascript:;" class="weui-grid" 
    v-for="(g,index) in cartgrid" :key="index">
      <div class="weui-grid__icon">
        <img :src="g.guess_img" alt />
      </div>
      <div class="weui-grid__label">
          <p class="title" v-text="g.guess_title"></p>
          <span class="price" v-text="'￥'+g.guess_price"></span>
          <span class="del" v-if="g.guess_oldprice"  v-text="'￥'+g.guess_oldprice"></span>
      
      </div>
    </a>

  </div>
</template>

<script>
import "weui";
import axios from "axios";

export default {
  data() {
    return {
      cartgrid: []
    };
  },
  created() {
    this.onLoad();
  },

  methods: {
    onLoad() {
      axios.get("http://localhost:3000/cart").then(({ data }) => {
        window.console.log(data[0].guess_img);
        this.cartgrid = data;
      });
    }
  }
};
</script>

<style scoped lang="scss">

@function vw($px){
    @return ($px / 375) * 100vw;
}
    .weui-grids{
        margin-top: vw(3);
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        &:before{
            border: 0;
        }
        .weui-grid:before{
            border: 0;
        }
        .weui-grid:after{
            border: 0;
        }
        .weui-grid{
            padding: 0;
            width: auto;
            width: vw(185.6);
            .weui-grid__icon {
                width: auto;
                height: auto;
                margin: 0 auto;
                img{
                    width: vw(185.6);
                }
            }
            .weui-grid__label{
                padding: vw(9.38) vw(13.5) vw(11.5);
                margin: 0;
                text-align: left;
                .title{
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    color: #3c3c3c;
                    font-size: vw(16);
                    line-height: vw(16);
                }
                .price{
                    color: #ff6700;
                    font-size: vw(16);
                    margin-top: vw(5.2);
                }
                .del{
                    margin-left: vw(5.2);
                    text-decoration: line-through;
                    font-size: vw(12);
                    color: rgba(0,0,0,.54);
                }
            }
        }
    }

    // 单行文本出现省略号的条件：
// 1.容器必须有宽度，width；
// 2.给容器设置溢出隐藏 overflow：hidden；
// 3.强制文本在同一行显示white-space:nowrap;
// 4.文本溢出出现省略号text-overflow:ellipsis.
</style>

