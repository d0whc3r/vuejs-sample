import Vue from 'vue'
import app from './app.vue'
import router from './router.js'

new Vue({
  el: '#app',
  router: router,
  render: h => h(app)
})