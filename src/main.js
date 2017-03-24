import Vue from 'vue'
import App from './App'
import axios from 'axios'
import store from './store'
import router from './router'

Vue.prototype.$http = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  created:function(){
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
