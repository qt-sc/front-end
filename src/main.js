import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/comment.css'

Vue.config.productionTip = false

Vue.use(ElementUI)

import router from './routes/routes'
import store from './store/index'

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
console.log(localStorage)