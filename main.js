import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
import UndrawUi from 'undraw-ui'
import 'undraw-ui/dist/style.css'

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App
})
// app.use(UndrawUi)
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