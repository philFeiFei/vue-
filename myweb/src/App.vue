
<template>
    <div id="app">
        <img src="./assets/logo.png">
        <div class="container">
            我是app vue 我一直被默认加载。;
        </div>
        <!--跳转到不同的路径，按照router index.js中配置显示相应的模版。 -->
        <h3>routerlink形式路由跳转</h3>
        <router-link class="alert alert-primary" to="/">helloWorld</router-link>
        <router-link class="alert alert-secondary" to="/test">Test</router-link>
        <router-link class="alert alert-success" to="/player/1">科比</router-link>
        <router-link class="alert alert-danger" to="/player/2">詹姆斯</router-link>
        <router-link class="alert alert-warning" to="/player/3">迈克尔乔丹</router-link>
        <router-link class="alert alert-dark" to="/player/4">欧文</router-link>
        <hr>
        <h3>按钮方式的路由跳转</h3>
        <button type="button" class="btn btn-primary" @click="showDetail(1)">科比</button>
        <button type="button" class="btn btn-primary" @click="showDetail(4)">欧文</button>

        <hr>
        <h3></h3>
        <router-link class="alert alert-danger" :to="{path:'/player/2/status'}">詹姆斯</router-link>
        <router-link class="alert alert-warning" :to="{name:'player',params:{uid:'3'}}">迈克尔乔丹</router-link>
        <router-view name="Hello"></router-view>
        <router-view name="Test"></router-view>
        <router-view></router-view>


    </div>
</template>

<script>
import "./assets/my.css";
export default {
  name: "App",
  methods:{
      showDetail(uid){
          this.$router.push({path:'/player/'+uid.toString()});
      }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.hello{
    border:1px solid red;
    width:400px;
    height:200px;
}
</style>
