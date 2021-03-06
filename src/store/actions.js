import api from '../api'
import router from '../routes/routes'
import MsgAlert from './MsgAlert'
export default {
    UserLogin({commit},data){
        api.localLogin(data)
            .then(res=>{
                console.log("commit: ", commit)
                console.log("res: ", res.TOK)
                router.push({path:'/home'})
                // if(data.code==200){
                //     // 找到用户
                //     commit('USER_SIGNIN',data.token)
                //     router.replace({path:'/'})
                // }else{
                //     // 没找到用户或者密码不对
                //     MsgAlert(data.message)
                // }
            })
            .catch(error=>{
                // 一般服务器连接不上这里就会报网络错误
                MsgAlert(error.toString())
            })
    },

    UserLogout({commit}){
        commit('USER_SIGNOUT');
        router.push({path:'/login'});
    },

    showProgress({commit},number){
        commit('SHOW_PROGRESS',number)
    },

    changeHeadLine({commit},headline){
        commit('HEAD_LINE',headline)
    }

}