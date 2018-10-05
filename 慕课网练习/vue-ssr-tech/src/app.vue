<template>
   <div id="app">
      <div id="cover"></div>
      <app_header></app_header>
      <app_todo></app_todo>

      <app_footer></app_footer>
  
   </div>
</template>

<script>
//引入Header组件app_header
import app_header from "./todo/header.vue";
import app_footer from "./todo/footer.jsx";
import app_todo from "./todo/todo.vue";
export default {
  components: {
    app_header,
    app_footer,
    app_todo
  }
};
</script>


<!-- 设置scoped 表示当前组件下的id只在当前组件起作用，不会跟其他组件引起冲突 -->
<style lang="stylus" scoped>
#app {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

#cover {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #555;
  opacity: 0.5;
  z-index: -1;
}
</style>