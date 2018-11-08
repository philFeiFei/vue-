<template>
    <div>
        <p><slot name="header"></slot></p>
        <span>msg:{{msg}}</span>
        <p><slot name="body"></slot></p>
        <p><slot :aaa="aaa" bbb="3333"></slot></p>
        <p>{{ccc}}</p>
        <input type="button" value="click" @click="changeMsg">
    </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "hello",
      aaa: "aaaaaa",
      bbb: "bbbbbb"
    };
  },
  props: {
    ccc: {
      type: String
    }
  },
  methods: {
    changeMsg() {
      //下面说明了，data数据源来自哪里，就去哪里改变它。
      this.msg += "w";
      this.$emit("changeMsg");
    }
  }
};
</script>




