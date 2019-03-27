import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import './assets/reset.css'
import './assets/fonts/iconfont.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'

Vue.use(ElementUI)

Vue.prototype.$http = axios
new Vue({
    el: '#app',
    render: h => h(App),
    router
})