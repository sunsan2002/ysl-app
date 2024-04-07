import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
import UndrawUi from 'undraw-ui'
import 'undraw-ui/dist/style.css'
import vue3videoPlay from 'vue3-video-play' // 引入组件
import 'vue3-video-play/dist/style.css' // 引入css

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.use(vue3videoPlay)
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