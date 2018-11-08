<template>
    <div>
        <h3>this is router test</h3>
        <c_vuex></c_vuex>
         <hr>
        <login></login>
        <router-link type="success" round to="/login">login</router-link>
        <router-link to="/test">test</router-link>
        <router-link class="alert alert-success" to="/player/1">科比（link）</router-link>
        <button type="button" class="btn btn-primary" @click="showDetail(4)">欧文(button)</button>
        <el-button type="success" round @click="showDetail(2)">詹姆斯(el-button)</el-button>
        <router-link class="alert alert-warning" :to="{name:'player',params:{uid:'3'}}">迈克尔乔丹(对象link)</router-link> -->

        <router-link class="alert alert-danger" :to="{path:'/player/2/status'}">直接到詹姆斯的状态</router-link>
       <router-view></router-view>
 <router-view name="Test"></router-view>

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


