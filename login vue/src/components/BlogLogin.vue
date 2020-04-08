<template>

  <div class="bloglogin">
    <blog-header></blog-header>
    <h1>{{ msg }}</h1>
    <h2>Login</h2>
    <div style=" width:250px;border:1px solid #000; padding:10px;margin: 0 auto;margin-bottom:50px" >
      <p  align="left">Username:</p>
      <input type="text" placeholder="username" >
      <p align="left">Password:</p>
      <input type="text" placeholder="password">
      <br>
      <button style="margin-top:15px" v-on:click="login">登录</button>
    </div>
    <blog-bottom></blog-bottom>
  </div>
</template>

<script>
import BlogHeader from '@/components/BlogHeader.vue'
import BlogBottom from '@/components/BlogBottom.vue'
export default {
  name: 'BlogLogin',
  components:{BlogHeader,BlogBottom},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      loginInfo:{username:'',password:''},
      responseResult:[]
    }
  },
  methods:{
    login(){
      this.$axios.post('/login',
      {
        username:this.loginInfo.username,
        password:this.loginInfo.password
      })
      .then(successResponse => {
        this.responseResult = JSON.stringify(successResponse.data)
        if(successResponse.data.code == 200){
          this.$router.replace({path:'/in'})
        }
      })
      .catch(failResponse => {})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
