<template>
    <div class="vuexTest">
        <p>{{count}}</p>
        <p>$store.state.count:{{$store.state.count}}</p>
        <p>$store.getters.getA:{{$store.getters.getA}}</p>

        <button v-on:click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementAsyncM">incrementAsync</button>
    </div>
</template>

<script>
export default {
  computed: {
    //计算属性得到的coutn才会实时变化，data属性中的话，不会实时变化，只会第一次得到那个值。
    count() {
      return this.$store.state.count;
    }
  },
  methods: {
    increment() {
      this.$store.commit("increment", 8);
    },
    decrement() {
      this.$store.commit("decrement");
    },
    incrementAsyncM() {
      this.$store.dispatch("incrementAsync", 2);
    }
  }
};
</script>
<style scoped>
.vuexTest {
  width: 300px;
  height: 150px;
  border: 1px solid blue;
  clear: both;
}
</style>


