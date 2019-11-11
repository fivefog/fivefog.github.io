<template>
    <van-tabbar active-color='#ff6700' v-model="active">
        <van-tabbar-item to="/main/home" icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item to="/main/sort" icon="search">分类</van-tabbar-item>
        <van-tabbar-item to="/main/goodcar" icon="friends-o">购物车</van-tabbar-item>
        <van-tabbar-item to="/main/mine" icon="setting-o">我的</van-tabbar-item>
    </van-tabbar>

</template>

<script>
    import Vue from 'vue';
    import { Tabbar, TabbarItem } from 'vant';

    Vue.use(Tabbar).use(TabbarItem);
    export default {
    data() {
        return {
        active: 0
        }
    }
    }
</script>
<style scoped>
    .van-hairline--top-bottom{
        z-index: 333!important;
        position: fixed;
        bottom: 0;
    }
</style>