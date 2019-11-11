<template>
   <!-- 路由匹配到的组件将渲染在这里 -->
    <div id="app">
        <router-view></router-view>  
        <Tabbar/>
    </div>
    
</template>

<script>
import Tabbar from '../components/Tabbar.vue'
export default {
    components:{
        Tabbar
    }
}
</script>