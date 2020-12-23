import Vue from 'vue'
import Router from 'vue-router'

//组件模块
import Reg from '@/components/Reg'
import Login from '@/components/Login'
import Front from '@/components/Front'
import About from '@/components/About'
import Home from '@/components/Home'
// import Tags from "@/components/Tags";
import NotFound from "@/components/NotFound";

Vue.use(Router)

export default new Router({
    routes: [
        {
            path:'/',
            component:Front,//这是文章页
            hidden:true,
            children:[
                {path:'',redirect:'home',  meta:{auth:false}},
                {path:'home',component:Home,  meta:{auth:false}},
                {path:'about',component:About,  meta:{auth:false}},
                // {path:'tags',component:Tags,  meta:{auth:false}},
                // {path:'article/:id',component:Article, meta:{auth:false,scrollToTop: true}},
            ]
        },
        {
            path:'/reg',
            component:Reg,
            meta:{auth:false},
            hidden:true
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '*',
            name: 'NotFound',
            component: NotFound
        }
    ]
})