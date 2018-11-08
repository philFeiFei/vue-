<template>
    <div class="vuexTest">
        <p>{{count}}</p>
        <p>moduleA.state.aaa:{{$store.state.a.aaa}}</p>
        <p>namespaced=false时 直接获取moduleA.state.getaaa:{{$store.getters.getaaa}}</p><!--这个实在namespaced为false时这样写  -->
        <p>namespaced=true时 暂时不知道怎么直接获取？？？</p><!--这个实在namespaced为false时这样写  -->
        <p>namespaced=false时module a中 mapGetter(["getaaa"]):{{getaaa}}</p>
        <p>namespaced=true时 module a中 mapGetter({getaaa1:a/getaaa})内直接别名:{{getaaa1}}</p>
        <p>$store.state.count:{{$store.state.count}}</p>
        <p>counterA:{{counterA}}; counterB:{{counterB}}</p>
        <p>$store.getters.getA:{{$store.getters.getA}}</p>
        <p>mapGetter(["getA"]):{{getA}}; getA1:{{getA1}}</p>

        <button v-on:click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementAsyncM">incrementAsync</button>

    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  computed: {
    //计算属性得到的coutn才会实时变化，data属性中的话，不会实时变化，只会第一次得到那个值。
    /* count() {
      return this.$store.state.count;
    }, */
    //还有快速得到count的方法,下面是三种获取count的方法。
    ...mapState(["count"]),
    ...mapState({
      counterA: "count"
    }),
    ...mapState({
      counterB: state => state.count
    }),
    //mapGetters有下面两种方式
    ...mapGetters(["getA", "getaaa"]), //namespaced=false
    ...mapGetters({
      getA1: "getA",
      getaaa1: "a/getaaa" //namespaced=true
    })
  },
  methods: {
    ...mapActions(["incrementAsync"]),
    ...mapMutations({
      add: "increment" //起个别名‘add',否则increment与本组件中方法重名。
    }),
    increment() {
      // this.$store.commit("increment", { num1: 1, num2: 3 });
      this.add({ num1: 1, num2: 3 });
    },
    decrement() {
      this.$store.commit("decrement");
    },
    incrementAsyncM() {
      this.incrementAsync(2);
    }
  }
};
</script>
<style scoped>
.vuexTest {
  width: 700px;
  height: 500px;
  border: 1px solid blue;
  clear: both;
}
</style>


