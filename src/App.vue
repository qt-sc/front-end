<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'application/json';
export default {
  name: 'App',
  components: {

  },
  methods:{

  },
  computed:mapState(['progress']),
  mounted () {
    axios.get('/api/users',this.ruleForm).then(response => {
      console.log(response)
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
