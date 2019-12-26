import Vue from 'vue'
import App from './components/Home.vue'
import axios from 'axios'
import vuex from 'vuex'
import promise from 'es6-promise'
import router from './router'
import {store} from './store'
import VSwitch from 'v-switch-case'


Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.use(VSwitch)

new Vue({
  render: h => h(App),
  axios,
  vuex,
  promise,
  router,
  store
}).$mount('#app')
