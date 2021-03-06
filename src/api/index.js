import axios from 'axios'
// import store from '../store'

axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.baseURL="http://localhost:8080"
axios.defaults.withCredentials=true

// const instance = axios.create({
//     baseURL: 'http://localhost:8080',
//     withCredentials: true
// })
// const front_instance = axios.create({
//     baseURL: 'http://localhost:8080',
//     withCredentials: true
// })
// instance.defaults.headers.post['Content-Type'] = 'application/json'

// if(localStorage.getItem('jwt')){
//     /* localStorage.getItem('jwt')是带引号的字符串
//       Bearer token(通过Authorization头部字段发送到服务端便于验证)的格式：Bearer XXXXXXXXXX
//     */
//     // eslint-disable-next-line no-useless-escape
//     instance.defaults.headers.common['Authorization'] = "Bearer "+localStorage.getItem('jwt').replace(/(^\")|(\"$)/g,'')
// }

// // axios拦截请求
// axios.interceptors.request.use = instance.interceptors.request.use = front_instance.interceptors.request.use
// front_instance.interceptors.request.use(config=>{
//     store.dispatch('showProgress',20)
//     return config
// },err=>{
//     // store.dispatch('showProgress',100)
//     return Promise.reject(err)
// })

// // axios拦截响应
// axios.interceptors.response.use(response=>{
//     // store.dispatch('showProgress',100)
//     console.log("res: ", response)
//     return response
// },err=>{
//     store.dispatch('showProgress',100)
//     return Promise.reject(err)
// })

export default {
    // 注册
    localReg(data){
        return axios.post('/users/signup',data)
    },
    // 登录
    localLogin(data){
        return axios.post('/users/login',data)
    },
    // 获取文章
    getArticleLists(){
        return axios.get('/api/articles',{});
    },
    showProgress({commit},number){
        commit('SHOW_PROGRESS',number)
    }
}
