<template lang="html">
    <div class="about" v-loading="loading2" element-loading-text="加载中">
        <div v-if="shows">
            <h2>服务计算</h2>
            <p>简单 web 服务与客户端开发实战</p>
            <p>
                <a href="https://github.com/qt-sc/front-end" target="_blank">前端</a>&nbsp;&nbsp;
                <a href="https://github.com/qt-sc/back-end">后端</a>
                <a href="https://github.com/qt-sc/api-doc">报告</a>
            </p>
            <h2>关于网站</h2>
            <p>本站服务端采用 go + MySql + Redis 搭建, 客户端采用 Vue 全家桶</p>
            <p>主要功能包括: 登录, 注册, 查看文章</p>
            <p>主要技术栈: go, mysql, redis, vue, vue-router, vuex, axios, es6, element-ui</p>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                shows:false,
                loading2:true
            }
        },
        mounted(){
            this.$store.dispatch('changeHeadLine','关于')
            setTimeout(()=>{
                this.$store.dispatch('showProgress', 100)
                this.shows = true;
                this.loading2 = false
            },300)
        }
    }
</script>

<style lang="css" scoped>
    .about{
        margin:auto;
    }

    .about a {
        color:#4078c0;
        display:inline-block;
        padding: 0.2rem 0.4rem;
        font-size: 1.6rem;
    }
    .about a:first-child{
        padding-left: 0;
    }
    .about p{
        font-size: 1.6rem;
        line-height: 1.6em;
    }

    .about a ,.about p,.about h2{
        margin: 1rem auto;
    }
    .about h2{
        font-weight: 400;
        font-size: 3rem;
        align-self: center;
        margin-top: 2rem;
    }
    @media screen and (max-width:480px){
        .about a,.about p{
            font-size: 1.4rem;
        }
        .about h2{
            margin-top: auto;
            font-size: 2.2rem;
        }
    }
</style>
