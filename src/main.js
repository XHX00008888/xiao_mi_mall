import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios' // 将axios植入vue，因此在每个文件中可以通过this访问axios

import App from './App.vue'
import router from './router'
// import env from './env'

const mock = false
if (mock) {
  require('./mock/api')// 之所以不在开始使用import导入，是因为require是执行阶段导入，而import是编译阶段就导入了，而不会判断mock的值是否为true
}
axios.defaults.baseURL = '/api'
axios.defaults.timeout = 8000 // 超时

// axios.defaults.baseURL = env.baseURL
// 接口拦截
axios.interceptors.response.use((response) => {
  let res = response.data // res为拦截到的json数据
  if (res.status == 0) {
    return res.data
  } else if (res.status == 10) { // 状态码为10,则跳转到用户登录界面，之所以不用路由是因为在这里用不了
    window.location.href = '/login'
  } else {
    alert(res.msg)
  }
})

Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
