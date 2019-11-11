<template>
    <van-swipe  :autoplay="3000" indicator-color="white">
        <van-swipe-item  v-for="(image, index) in images" :key="index">
            <img :src='image'>
        </van-swipe-item>
        
    </van-swipe>
</template>
<script>
    import Vue from 'vue';
    import { Swipe, SwipeItem } from 'vant';

    Vue.use(Swipe).use(SwipeItem);
    export default {
    data() {
        return {
        images: [
            require('../assets/tuijian/1.jpg'),
            require('../assets/tuijian/2.jpg'),
            require('../assets/tuijian/3.jpg'),
            
        ]
        }
    },
    methods:{
      
    }
    }
</script>
<style scoped lang='scss'>
 @function vw($px) {
    @return ($px / 375) * 100vw;
  }
    .van-swipe__track{
        .van-swipe-item{
            img{
                width: vw(375);
                
                // width:4.266667rem;
                // height: 2.133333rem
            }
        }
    }
</style>