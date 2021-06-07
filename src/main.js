/*
 * @作者: Edwin Yeung
 * @Date: 2020-02-14 23:16:25
 * @修改人: Edwin Yeung
 * @LastEditTime: 2021-06-01 01:16:42
 * @描述: 
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//引入路由和Vuex
import router from './router/index.js'
import store from './store/index.js'
import qs from 'querystring'

import './assets/js/rem.js'
import './assets/font/iconfont.css'
import './assets/less/reset.css'

import './plugins/vant.js'   // 统一引用 vant
import {Toast} from 'vant'

// // import VueResource from 'vue-resource'

import axios from 'axios'

//引入日期时间格式化组件
import '@/utils/dateFormat.js'


// //引入vant
// import Vant from 'vant'
// import 'vant/lib/index.css'

// // import 'vant/lib/index.less'    // // 引入全部样式


// // Vue.use(VueResource)
// Vue.use(Vant)

Vue.config.productionTip = false
// axios.defaults.headers.common['authorization'] = store.state.token
// console.log('main 里面的 store.state.token :>> ',  store.state.token);
// axios.defaults.headers.common['authorization']='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIiLCJpYXQiOjE2MjEwMDEwOTV9.5q_YVkePhK-EhsuBgOjrUTwQW7fndXgbjW59ihlQbKA'

// 添加请求拦截器，在请求头加 token
axios.interceptors.request.use(
  config => {
    var token = window.localStorage.getItem('token')
    if (token) {
      // console.log('main.js token :>> ', token);
      config.headers.authorization = token
    }
    return config
  },
  error => {
    alert('错误的传参', 'fail')
    return Promise.reject(error)
  }
)

// 自定义的 axios 响应拦截器
axios.interceptors.response.use((response) => {
  // 判断一下响应中是否有 token,如果有就直接使用此 token,替换掉本地的 token
  var token = response.headers.authorization
  if (token) {
    // 下面的语句好像执行不了
    alert('ok')
    // 如果 header 中存在 token，那么触发 refreshToken 方法，替换本地的 token
    axios.defaults.headers.common['authorization'] = token
  }
  return response
}, (error) => {
  if (error.response) {
    switch (error.response.status) {
      case 401:
        // 这里写清除token的代码
        store.commit('LOGOUT')
        // window.localStorage.removeItem('token')
        console.log('错误代码:401 描述：', error.response.data);
        // alert('错误代码:401 描述：' + error.response.data)
        router.replace({
          path: '/login',
          query: { redirect: router.currentRoute.fullPath }
        })
        return;
      case 500:
        Toast.fail({message:'网络异常',duration:10000});
        return; // reject这个错误信息
    }
  }
  if (error.message.includes('timeout')) { // 判断请求异常信息中是否含有超时timeout字符串
    Toast.fail({message:'网络连接超时\n请稍后再试',duration:5000});
    console.log('网络连接超时 ');
    return  // reject这个错误信息
  }
  return Promise.reject(error)
})

Vue.prototype.$http = axios
Vue.prototype.$qs = qs

new Vue({
  el: '#app',
  components: { App },
  // template:'<App/>',
  render: h => h(App),
  store,
  router,
})

