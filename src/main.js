import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios);
Vue.config.productionTip = false
var moment = require('moment');
moment().format();
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
Vue.filter("timeF",(t)=>{
  return moment(t).startOf('minute').fromNow().replace(/hours?/, '小时').
  replace('ago', '前').
  replace(/days?/, '天').
  replace(/minutes?/, '分钟').
  replace(/\ban?/, '1').
  replace(/months?/, '个月')
      .replace(/\byears?/, '年')
      .replace(/\s/g, '')
      .replace('fewseconds','分钟');
})
