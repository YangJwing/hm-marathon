/*
 * @作者: Edwin Yeung
 * @Date: 2020-03-12 22:45:41
 * @修改人: Edwin Yeung
 * @LastEditTime: 2021-06-05 15:10:22
 * @描述: 
 */
import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

// 初始化时用sessionStore.getItem('token'),这样子刷新页面就无需重新登录
const state = {
    
    token: window.localStorage.getItem('token'),

    id: window.localStorage.getItem('id'),
    name: window.localStorage.getItem('name'),
    role:window.localStorage.getItem('role'),
    sex:window.localStorage.getItem('sex'),
    mobile:window.localStorage.getItem('mobile'),
    // user:JSON.parse(window.localStorage.getItem('user')),
    user:window.localStorage.getItem('user'),

}

//将token保存到sessionStorage里，token表示登陆状态
const mutations = {
    SET_TOKEN: (state, data) => {
        state.token = data
        window.localStorage.setItem('token', data)
    },
    //保存用户
    SET_USER: (state, data) => {
        state.user = data
        // window.sessionStorage.setItem('name', data)
        window.localStorage.setItem('user', data)
    },
    //保存用户名
    SET_NAME: (state, data) => {
        state.name = data
        // window.sessionStorage.setItem('name', data)
        window.localStorage.setItem('name', data)
    },
    //保存用户性别
    SET_SEX: (state, data) => {
        state.sex=data
        window.localStorage.setItem('sex', data)
    },
    //保存用户ID
    SET_ID: (state, data) => {
        state.id=data
        window.localStorage.setItem('id', data)
    },
    //登出
    LOGOUT: (state) => {
        // 登出的时候要清除token
        state.token = null
        state.name = null
        state.sex= null
        state.id= null
        // window.localStorage.clear()
        // 用上面一句代替下面的语句
        
        window.localStorage.removeItem('token')
        window.localStorage.removeItem('user')
        window.localStorage.removeItem('name')
        window.localStorage.removeItem('sex')
        window.localStorage.removeItem('id')
    }
}

const actions = {
}

const store = new Vuex.Store({
    state,
    mutations,
    actions
})

export default store