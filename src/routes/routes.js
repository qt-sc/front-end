import Vue from 'vue'
import Router from 'vue-router'

//组件模块
import Login from '../components/Login'
import About from '../components/About'
import Home from '../components/Home'
import NotFound from "@/components/NotFound";

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
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
            path: '/test',
            name: 'test',
            component: Home
        },
        {
            path: '*',
            name: 'NotFound',
            component: NotFound
        }
    ]
})