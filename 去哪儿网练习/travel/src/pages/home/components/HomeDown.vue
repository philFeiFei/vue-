<template>
  <div>
    <div>
      我是首页底部 <span v-show="ifshow">{{showNames}}</span>
      <button v-on:click="sendMsg">我要发送祝福，请点击我吧</button>
      <div class='iconfont'>&#xe607;</div>
      <button v-on:click="cancelMsg">我要取消祝福，请点击我吧</button>
      <div class='iconfont'>&#xe601;</div>
      <div class='iconfont'>&#xe697;</div>
      <div class='iconfont' style="size:16px">&#xe69b;</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeDown',
  props: {
    showNames: {
      type: String,
      default: null
    },
    ifshow: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      message: "我是儿子，谢谢你照顾我，这是我的祝福！",
      cancelmessage: "",
    }
  },
  methods: {
    sendMsg() {
      this.$emit('childSendMsg', this.message)
    },
    cancelMsg() {
      this.$emit('childCancelMsg', this.cancelmessage)
    }
  },
}
</script>
