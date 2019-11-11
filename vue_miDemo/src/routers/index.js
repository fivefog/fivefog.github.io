import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Home from '../pages/Home.vue'
import Sort from '../pages/Sort.vue'
import Mine from '../pages/Mine.vue'
import GoodCar from '../pages/GoodCar'
import Detail from '../pages/Detail.vue'
import Search from '../pages/Search.vue'
import Main from '../pages/Main.vue'
import Login from '../pages/Login.vue'
const routes = [
    {
        path: '/main', // 当页面为http://localhost:8080/main 在<router-view>加载Main组件
        component: Main,
        //嵌套的路由放在childre里，注意：里面的path没有/
        children: [
            { path: 'home', component: Home, name:'home'}, 
            { path: 'sort', component: Sort, name:'sort'},
            { path: 'mine', component: Mine },
            { path: 'goodcar', component: GoodCar },
        ]
    },

    { path: '/search', component: Search ,name:'search'},
    { path: '/login', component: Login ,name:'login'},
    { path: '/detail/:id', component: Detail ,name:'detail'},
  
    // 重定向 
    {
        path: '/',
        redirect: '/main/home'
    }

]
const router = new VueRouter({
    routes
})
export default router