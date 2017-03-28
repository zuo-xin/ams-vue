import Vue from 'vue'
import App from './App'
import axios from 'axios'
import store from './store'
import router from './router'
import util from './assets/util.js'


Vue.prototype.$http = axios
Vue.prototype.util = util

Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  router,
  mounted:function(){
      this.$http.post('/api/api/api/login', {
          username: 'admin',
          password: 'yiqihao888'
      })
      .then(function(response) {
      })
      .catch(function(error) {
      });
  },
  template: '<App/>',
  components: { App }
})
