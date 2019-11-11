<template>
    <div class="goodcar">
        <HeaderSearch/>
        <van-cell title="登录后享受更多优惠" is-link to="/login" value="去登录"/>
        <div class="look">
            <span class="iconfont icon-gouwuchekong"></span>
            <span class="txt">购物车还是空的</span>
            <i >去逛逛</i>
        </div>
        <img class="cartimg" src="../assets/cart/cart.jpg" alt="猜你喜欢">
        
        <CartGrid/>
    </div>
</template>
<script>
import Vue from 'vue';

import { Grid, GridItem } from 'vant';

import { Cell, CellGroup } from 'vant';
import CartGrid from '../components/CartGrid.vue';

Vue.use(Grid).use(GridItem);
Vue.use(Cell).use(CellGroup);
    import HeaderSearch from '../components/HeaderSearch.vue';
    export default {
        
        components:{
            HeaderSearch,
            CartGrid

        }
    }
</script>
<style scoped lang='scss'>
@function vw($px) {
    @return ($px / 375) * 100vw;
  }
  .goodcar{
      width: vw(375);
    header{
        position: relative;
    }
    .van-cell{
        // top: vw(50);
    }
    .look{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: vw(10.4);
        background: #ebebeb;
        .icon-gouwuchekong{
            color: rgba(0,0,0,.06);
            font-size: vw(50);
        }
        .txt{
            color: rgba(0,0,0,.27);
            font-size: vw(12);
            padding: vw(8.3);
        }
        i{
            padding: 0 vw(12.5);
            border: vw(1) solid rgba(0,0,0,.15);
            color: rgba(0,0,0,.87);
            font-size: vw(14);
            line-height: vw(26);
        }
    }
    .cartimg{
        width: vw(375);
    }
 
    
  }


</style>