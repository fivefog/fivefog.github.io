<template>
        <van-search placeholder="请输入搜索关键词"  v-model="value" @click="jump()"/>
</template>
<script>
    import Vue from 'vue';
    import { Search } from 'vant';

    Vue.use(Search);
    export default {
        data(){
            return{
                value:''
            }
        },
        methods:{
            jump(){
                return this.$router.push('/search'); //编程式导航
            }
        }
    }
</script>