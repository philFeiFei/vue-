<template>
    <div>
        <span>{{message}}</span>

        <input  type="button" value="点击试试增加" class="btn btn-danger" @click="changeM">
        <input  type="button" value="点击试试减少" class="btn btn-danger" @click="changeMn">
        <p>{{$store.state.count}}</p>
    </div>
</template>
<script>
export default {
  data() {
    return {
      message: "this is my compse2.vue test"
    };
  },
  methods: {
    changeM() {
      this.message += "we";
      this.$store.commit("increment", 8);
    },
    changeMn() {
      this.$store.commit("decrement", 1);
    }
  }
};
</script>

