<template>
    <section class="real-app">
        <input type="text" class="add-input"
        placeholder="接下来需要做什么？请输入"
        autofocus="autofocus" v-on:keyup.enter="addTodo"  >
    
    <todo_item v-bind:todo="oneitemOftodos"
        v-for="oneitemOftodos in filteredTodos"
        :key="oneitemOftodos.id"
        @del="deleteItem"
    ></todo_item>
    <todo_tabs :filter="filter"
      :activeItemsNum="activeItemsNum"
      @toggle="toggleFilter"
      @clearAllCompleted="clearAllCompleted"
    
    ></todo_tabs>
    </section>




</template>

<script>
import todo_item from "./item.vue";
import todo_tabs from "./tabs.vue";
let id = 0;
export default {
  data() {
    return {
      todos: [],
      filter: "all"
    };
  },
  methods: {
    addTodo(e) {
      this.todos.unshift({
        id: id++,
        content: e.target.value.trim(),
        completed: false
      });
      e.target.value = "";
    },
    deleteItem(id) {
      this.todos.splice(
        this.todos.findIndex(oneitemOftodos => oneitemOftodos.id === id),
        1
      );
    },
    toggleFilter(state) {
      this.filter = state;
    },
    clearAllCompleted() {
      //调用filter之后，todos会得到一个新的数组。
      this.todos = this.todos.filter(todo => todo.completed === false);
    }
  },
  components: {
    todo_item,
    todo_tabs
  },
  computed: {
    filteredTodos() {
      if (this.filter === "all") {
        return this.todos;
      }
      const completed = this.filter === "completed";
      //过滤todos，并返回一个新的数组，供子组件item使用。todos结构没有变化，仍然为全部。
      return this.todos.filter(todo => completed === todo.completed);
    },
    //计算出active的items的数量，传给tabs，让子组件tabs用于显示。
    //这里其实也可以将当前的todos传给tabs，让tabs计算active的数量，然后展示，不知道哪种方式更好点
    //慕课网作者采用的是第二种。而我当前demo采用的是第一种。
    activeItemsNum() {
      return this.todos.filter(todo => !todo.completed).length;
    }
  }
};
</script>

<style lang="stylus" scoped>
.real-app {
  width: 600px;
  margin: 0 auto;
  box-shadow: 0 0 5px #666;
}

.add-input {
  position: relative;
  margin: 0;
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  border: 0;
  outline: none;
  color: inherit;
  box-sizing: border-box;
  font-smoothing: antialiased;
  padding: 16px 16px 16px 36px;
  border: none;
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
}
</style>


