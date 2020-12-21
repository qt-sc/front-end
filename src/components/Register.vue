//register组件

<template>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="name"><el-input v-model="ruleForm.name"></el-input></el-form-item>
        <el-form-item label="邮箱" prop="email"><el-input v-model="ruleForm.email"></el-input></el-form-item>
        <el-form-item label="密码" prop="password"><el-input type="password" v-model="ruleForm.password" auto-complete="off"></el-input></el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        data() {
            var validateEmail = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入您的邮箱'));
                } else {
                    let patter = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
                    if (!patter.test(this.ruleForm.email)) {
                        callback(new Error('请输入正确的邮箱格式'));
                    }
                    callback();
                }
            };

            return {
                activeName: 'register',
                ruleForm: {
                    name: '',
                    email: '',
                    password: ''
                },
                rules: {
                    name: [{ required: true, message: '请输入您的名称', trigger: 'blur' }],
                    email: [{ required: true, validator: validateEmail, trigger: 'blur' }],
                    password: [{ required: true, message: '请输入账号密码', trigger: 'blur' }]
                }
            };
        },

        methods: {
            submitForm(formName) {
                this.$refs[formName].validate(valid => {
                    if (valid) {
                        this.$store.dispatch('UserRegister', this.ruleForm)
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },

            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    };
</script>