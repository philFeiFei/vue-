<template>
    <div>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="姓名：">
                <el-input v-model="name"></el-input>
            </el-form-item>
        </el-form>
        姓名：<el-input v-model="name" placeholder="请输入用户名" type="text" width="200px"></el-input>
        密码：<el-input v-model="password" placeholder="请输入密码" width="200px"></el-input>
        <el-button type="text" @click="enterMenu1()">登录</el-button>
        <router-link to="/menu2">menu2</router-link>

    </div>
</template>
<script>
export default {
    data() {
        return {
            name: "",
            password: ""
        };
    },
    created() {
        this.$message("login vue created!!!!");
    },
    methods: {
        enterMenu1() {
            this.$router.push({
                path: "/menu1"
            });
        }
    }
};
</script>
<style scoped>
div {
  width: 100%;
  height: 100%;
  background-color: cadetblue;
}
.el-input__inner {
  width: 100px;
}
</style>


