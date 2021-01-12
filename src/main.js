// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import echarts from 'echarts';
import ElementUI from 'element-ui';
import http from './api/request'
import 'element-ui/lib/theme-chalk/index.css';
import VCharts from 'v-charts'

Vue.config.productionTip = false

Vue.prototype.$echarts=echarts
Vue.prototype.$http=http
Vue.use(ElementUI)
Vue.use(VCharts)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
