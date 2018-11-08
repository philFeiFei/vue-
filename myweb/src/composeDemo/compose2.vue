<template>
    <div>
        <span>welcome</span>
        <h1 v-show="active">text:{{text}} </h1>
        <h3 v-show="active">active=true 就能看到</h3>
        <input v-show="active" type="button" value="click" @click="changeText">

    </div>
</template>
<script>
export default {
  data() {
    return {
      message: "this is my compse2.vue test"
    };
  },
  props: {
    active: {
      type: Boolean
    },
    text: String
    //onchange: Function
  },
  methods: {
    changeText() {
      //return this.onchange();//这是一种调用父组件方法的方式，通过props 传入function
      this.$emit("onchange1"); //第二种触发父组件方法，父组件v-on事件 @onchange1=
    }
  }
};
</script>

