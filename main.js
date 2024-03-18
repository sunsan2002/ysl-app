import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import tabbar from 'components/common/tabbar.vue'

Vue.component('tabbar',tabbar)
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.use(ElementPlus);
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif