<template lang="html">
    <div class="NotFound">
        <div class="wrap">
            <img class="lose" src="../assets/img/very_sorry.png" alt="对不起，你要找的页面不见了"/>
            <el-button class="return" type="primary" @click="goHome">返回主页</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        methods:{
            goHome(){
                this.$router.replace({path:'/'})
            }
        }
    }
</script>

<style lang="css" scoped>
    .NotFound{
        display: flex;
        height: 100%;
        color:#fff;
        padding: 1rem;
    }
    .wrap{
        margin: 0 auto;
        text-align: center;
    }
    .lose{
        width: 100%;
        display: block;
        margin: 0 auto;
    }
    .return{
        display: block;
        margin: 0 auto;
    }
</style>
