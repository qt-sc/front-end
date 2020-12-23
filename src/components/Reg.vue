
<template>
    <div class="container" >
        <el-form class="reg_form" :model="user" :rules="rules" ref="user" label-position="left" label-width="0px" >
            <h3 class="title">系统注册</h3>
            <el-form-item prop="name">
                <el-input type="text" v-model="user.name" auto-complete="off" placeholder="用户名"></el-input>
            </el-form-item>
            <el-form-item prop="email">
                <el-input type="text" v-model="user.email" auto-complete="off" placeholder="邮箱"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input type="password" v-model="user.password" auto-complete="off" placeholder="密码"></el-input>
            </el-form-item>
            <el-form-item style="width:100%;">
                <el-button class='reg_button' type="primary" style="width:40%;" @click="handleSubmit" >注册</el-button>
                <el-button class='login_button' type="primary" style="width:40%;" @click="toLogin">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import api from "@/api";
    export default {
        data() {
            // 返回的数据
            return {
                logining: false,
                user: {
                    name: '',
                    email: '',
                    password:''
                },
                rules: {
                    name: [
                        { required:true,message:'请输入您的账号' ,trigger: 'blur' },
                    ],
                    email: [
                        { required: true, message: '请输入您的邮箱', trigger: 'blur' },
                    ],
                    password:[
                        { required: true, message: '请输入您的密码', trigger: 'blur' }
                    ]
                }
            };
        },
        methods: {
            handleSubmit() {
                this.$refs.user.validate((valid) => {
                    if (valid) {
                        api.localReg(this.user).then(()=>{
                            this.$router.push({path:'/login'})
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            toLogin(){
                this.$router.push({path:'/login'})
            }
        }
    }
</script>

<style scoped>
    .el-form-item{
        text-align: center
    }

</style>
