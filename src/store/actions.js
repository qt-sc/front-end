import api from '../api'
import router from '../routes/routes'
import MsgAlert from './MsgAlert'
export default {
    UserRegister({commit},data){
        api.localReg(data)
            .then(({data})=>{
                console.log(commit)
                console.log(data)
            })
            .catch(error=>{
                // 一般服务器连接不上这里就会报网络错误
                MsgAlert(error.toString())
            })
    },

    UserLogin({commit},data){
        api.localLogin(data)
            .then(({data})=>{
                if(data.code==200){
                    // 找到用户
                    commit('USER_SIGNIN',data.token)
                    router.replace({path:'/'})
                }else{
                    // 没找到用户或者密码不对
                    MsgAlert(data.message)
                }
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