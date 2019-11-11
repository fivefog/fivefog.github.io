import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        // author:'jing'
        skushow:{
            //商品规格组件的状态，显示/隐藏
            status: false
        }
    },
    getters:{
        getSkushow(state){
            return state.skushow;
        }
    },
    mutations:{
        setSkushow(state,newdata){
            state.skushow = newdata
        }
    },
    
    actions:{
        setSkushow(context,newdata){
            context.commit('setSkushow',newdata);
        }
    }
})