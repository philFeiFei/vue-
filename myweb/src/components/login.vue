<template>
    <div>
        姓名：<el-input v-model="name" placeholder="请输入用户名" type="text"></el-input>
        密码：<el-input v-model="password" placeholder="请输入密码"></el-input>
        <el-button type="text"  to="/Test">登录</el-button>
        <el-button type="text">注册</el-button>

    </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      password: ""
    };
  }
};
</script>
<style scoped>
div {
  width: 200px;
}
</style>


