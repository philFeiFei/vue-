<template>
  <div>
    <span>我是menu2的内容部分，哈哈哈。</span>
    <el-upload class="upload-demo" :on-success="onSuccess" drag action="http://localhost:8081/lxf/servlet/UploadInVue" multiple>
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
    <img width="100%" :src="picurl" alt="">
  </div>
</template>
<script>
export default {
  data() {
    return {
      aaa: 'ddddss哈哈哈',
      picurl: ''
    }
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    onSuccess(response, file, fileList) {
      console.log("response", response);
      this.picurl = response
    },
  }
}
</script>

<style scoped>
div {
  background-color: azure;
  color: blue;
}
</style>
