import Vue from 'vue'
import { Upload } from 'element-ui'
import App from './App.vue'

Vue.use(Upload)

new Vue({
  el: '#app',
  render: h => h(App)
})