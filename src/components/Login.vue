<template>
    <div class="login">
        <el-tabs v-model="activeName" @tab-click="handleClick" type="border-card">
            <el-tab-pane label="登录" name="login">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
                    <el-form-item label="名称" prop="name"><el-input v-model="ruleForm.name"></el-input></el-form-item>

                    <el-form-item label="密码" prop="password"><el-input type="password" v-model="ruleForm.password" auto-complete="off"></el-input></el-form-item>

                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>

                        <el-button @click="resetForm('ruleForm')">重置</el-button>
                    </el-form-item>
                </el-form>
            </el-tab-pane>

            <el-tab-pane label="注册" name="register">
                <register></register>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    import register from '@/components/Register'
    import axios from 'axios'

    axios.defaults.headers.post['Content-Type'] = 'application/json';

    export default {
        data() {
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.ruleForm.checkPass !== '') {
                        this.$refs.ruleForm.validateField('checkPass');
                    }

                    callback();
                }
            };

            return {
                islogined: false,
                activeName: 'login',
                ruleForm: {
                    name: 'test@fanghc.com',
                    password: '123'
                },
                rules: {
                    name: [{ required: true, message: '请输入您的名称', trigger: 'blur' }],
                    password: [{ required: true, validator: validatePass, trigger: 'blur' }]
                }
            };
        },

        methods: {
            //选项卡切换
            // eslint-disable-next-line no-unused-vars
            handleClick(tab, event) {},
            //重置表单
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            //提交表单
            submitForm(formName) {
                this.$refs[formName].validate(valid => {
                    if (valid) {
                        // axios.post('/api/user/login/pass',{
                        //     name: 'test@fanghc.com',
                        //     password: '123'
                        // }).then(response => {
                        //     console.log(response)
                        // })

                        this.$store.dispatch('UserLogin', this.ruleForm)
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            }
        },
        components: {
            register
        },
    };
</script>


<style lang="scss">
    .login {
        width: 400px;
        margin: 0 auto;
    }
</style>