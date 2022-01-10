import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import * as Echarts from 'echarts'
import VueEcharts from 'vue-echarts'

Vue.config.productionTip = false
Vue.prototype.$echarts = Echarts
Vue.prototype.$nextTick = Vue.nextTick
// console.log(Echarts)
Vue.component('v-echart', VueEcharts)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
