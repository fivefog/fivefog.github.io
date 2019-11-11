import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import './assets/font/iconfont.css'
import './assets/base.css'
import store from './stores'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
