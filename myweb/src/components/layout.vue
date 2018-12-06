<template>
  <div>
    <h1>这里相当于登陆之后的layout vue，内部有组件跳转而已啦。。。都是layout的子路由</h1>
    <router-link type="success" round to="/login">login Out</router-link>
    <router-link to="/menu1">menu1</router-link>
    <router-link to="/menu2">menu2</router-link>
    <router-link to="/upload">图片上传</router-link>

    <router-view></router-view>

  </div>
</template>
<script>
import login from "../components/login.vue";
import c_vuex from "../components/vuexTest.vue";
export default {
  methods: {
    showDetail(uid) {
      // this.$router.push({ path: "/player/" + uid.toString() });
      this.$router.push({
        path: "/player/" + uid.toString()
      });
    }
  },
  components: {
    login,
    c_vuex
  }
};
</script>


