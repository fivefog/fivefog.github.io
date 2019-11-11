<template>
    <van-tabs sticky @click='toggle' color='#ED5B00' title-active-color="#ED5B00" line-height='2px'>
        <van-tab  v-for="index in tab_title.length" :key="index" 
        :title="tab_title[index-1]">
            <component :is="componentName"></component>
        </van-tab>
</van-tabs>
</template>

<script>
    // import Swipe from "../components/Swipe.vue";
    // import Grid from "../components/Grid.vue";
    // import HomeGrid from "../components/HomeGrid.vue";

    import Vue from 'vue';
    import { Tab, Tabs } from 'vant';
    import TuiJian from './TuiJian.vue'
    import Phone from './Phone.vue'
    import ZhiNeng from './ZhiNeng.vue'

    Vue.use(Tab).use(Tabs)
    export default {
        data(){
            return{
                tab_title:['推荐','手机','智能','电视','笔记本','家电','生活周边'],
                tab_conName:['TuiJian','Phone','ZhiNeng','phone','tuijian','phone'],
                componentName:'TuiJian'
            }
        },
        methods:{
            
            toggle(index){
                this.componentName = this.tab_conName[index];
                // this.componentName = componentName;
                // window.console.log('切换',index);
                
            }
        },
        components: {
            // Swipe,
            // Grid,
            // HomeGrid
            TuiJian,
            Phone,
            ZhiNeng
        }
    }
</script>