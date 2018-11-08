
<template>
    <div id="app1">
        <img src="./assets/logo.png">
        <h4>main.js中data-》message：{{message}}--- {{msg}}； $store.state.count==》{{$store.state.count}}</h4>
        <c_vuex></c_vuex>
        <!--跳转到不同的路径，按照router index.js中配置显示相应的模版。 -->
        <h5>routerlink形式路由跳转</h5>
        <router-link class="alert alert-primary" to="/">helloWorld</router-link>
        <router-link class="alert alert-secondary" to="/test">Test</router-link>
        <!-- <router-link class="alert alert-success" to="/player/1">科比</router-link>
        <router-link class="alert alert-danger" to="/player/2">詹姆斯</router-link>
        <router-link class="alert alert-warning" to="/player/3">迈克尔乔丹</router-link>
        <router-link class="alert alert-dark" to="/player/4">欧文</router-link>
        <hr>
        <h5>按钮方式的路由跳转</h5>
        <button type="button" class="btn btn-primary" @click="showDetail(1)">科比</button>
        <button type="button" class="btn btn-primary" @click="showDetail(4)">欧文</button>

        <hr>
        <h5>直接跳转到路由下层</h5>
        <router-link class="alert alert-danger" :to="{path:'/player/2/status'}">詹姆斯的状态</router-link>
        <router-link class="alert alert-warning" :to="{name:'player',params:{uid:'3'}}">迈克尔乔丹</router-link> -->

        <router-view name="Hello"></router-view>
        <router-view name="Test"></router-view>
        <router-view></router-view>




    </div>
</template>

<script>
import "./assets/my.css";
import c_vuex from "./components/vuexTest.vue";
export default {
  name: "App",
  methods: {
    showDetail(uid) {
      this.$router.push({ path: "/player/" + uid.toString() });
    }
  },
  components: {
    c_vuex
  },
  data() {
    return {
      message: 1000
    };
  },
  computed: {
    msg() {
      /* setInterval(() => {
        this.message += 1;
      }, 1000); */
    }
  }
};
</script>

<style>
#app1 {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.hello {
  border: 1px solid red;
  width: 800px;
  height: 400px;
}
</style>
