/*
 * @作者: Edwin Yeung
 * @Date: 2020-03-12 00:27:32
 * @修改人: Edwin Yeung
 * @LastEditTime: 2021-06-05 15:37:34
 * @描述: 
 */

import Vue from "vue";
import VueRouter from "vue-router"
import store from "@/store/index.js"

Vue.use(VueRouter)

//懒加载
const Index = () => import('views/Index.vue')

const Home = () => import('views/Home.vue')
const Login = () => import('views/Login.vue')
const Search = () => import('views/Search.vue')
const Activity = () => import('views/Activity.vue')
const Punch = () => import('views/Punch.vue')
const My = () => import('views/My/My.vue')
const AboutMe = () => import('views/My/AboutMe.vue')
const MyDetail = () => import('views/My/MyDetail.vue')

const routes = [
    {
        path: '/',
        name: 'Index',
        redirect: "/home",
        component: Index,
        children: [{
            path: '/home',
            name: 'Home',
            component: Home,
            meta: {
                requireAuth: true,     // 添加该字段，表示进入这个路由是需要登录的
                // isShowBar:true
            }
        },
        {
            path: '/Punch',
            name: 'Punch',
            component: Punch,
        },
        {
            path: '/Activity',
            name: 'Activity',
            component: Activity,
        },
        {
            path: '/my',
            name: 'My',
            component: My,
        },
        {
            path: '/aboutme',
            name: 'AboutMe',
            component: AboutMe,
        },
        {
            path: '/login',
            name: 'Login',
            component: Login,
        },
        ]
    },
    {
        path: '/search',
        name: 'Search',
        component: Search,
    },
    {
        path: '/MyDetail',
        name: 'MyDetail',
        component: MyDetail,
    },
    // {
    //     path: '/home',
    //     component: Home,
    //     meta: {
    //         requireAuth: true,     // 添加该字段，表示进入这个路由是需要登录的
    //         // isShowBar:true
    //     }
    // },
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/aboutme',
        component: AboutMe,
        meta: {
            requireAuth: true,     // 添加该字段，表示进入这个路由是需要登录
        },
    }

]

const router = new VueRouter({
    routes,
    // mode:"history",
    base: "/marathon"  //为何加这句，参看：https://blog.csdn.net/lmy0111ly/article/details/83055627
})



//注册全局钩子用来拦截导航
router.beforeEach((to, from, next) => {
    // const token = store.state.token
    const token = localStorage.getItem('token')
    // console.log('router里的store.state.token :>> ', store.state.token);
    if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
        if (token) {           // 通过vuex state获取当前的token是否存在
            // const user = store.state.user
            store.commit("SET_USER", localStorage.getItem('user'))
            next()
        } else {
            console.log('该页面需要登录!');
            // alert('该页面需要登录后才能使用!');
            next({
                path: '/login'
                // query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
        }
    } else {
        // if (to.meta.isShowBar){
        // store.commit("SET_ISSHOWBAR", to.meta.isShowBar)
        // console.log('store.state.isShowBar :', store.state.isShowBar);
        // }
        //不用登录权限的页面直接显示
        next()
    }
})

export default router