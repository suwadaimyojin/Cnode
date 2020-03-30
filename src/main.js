import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
Vue.filter("timeF",(t)=>{
  var date =new Date();
  var dY =  date.getFullYear();
  var dMo = date.getMonth();
  var dD =  date.getDay();
  var dH =  date.getHours();
  var dMi=  date.getMinutes();

  console.log(t);
})
