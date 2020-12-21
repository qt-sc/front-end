import api from '../api'
// import router from '../router'
import MsgAlert from './MsgAlert'
export default {
    UserLogin({commit},data){
        api.localLogin(data)
            .then(({data})=>{
                console.log(commit)
                console.log(data)
            })
            .catch(error=>{
                // 一般服务器连接不上这里就会报网络错误
                MsgAlert(error.toString())
            })
    }
}