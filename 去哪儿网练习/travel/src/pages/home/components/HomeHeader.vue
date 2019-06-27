<template>
  <div class='header'>
    <div class='header-left iconfont'>&#xe653;</div>
    <div class='header-center'>请选择你想要的</div>
    <div class='header-right'>城市</div>
  </div>
</template>
<script>
export default {
  name: 'HomeHeader'
}
</script>
<style lang="stylus" scoped>
@import '~style/variables.styl';

.header {
  line-height: 1.86rem;
  display: flex;
  background-color: $bgColor;
  color: #fff;
  font-size: 12px;

  .header-left {
    width: 3rem;
    float: left;
  }

  .header-center {
    flex: 1;
    height: 1.2rem;
    line-height: 1.2rem;
    margin-left: 0.2rem;
    margin-top: 0.3rem;
    background: #fff;
    border-radius: 0.1rem;
    color: #ccc;
  }

  .header-right {
    width: 3rem;
    float: right;
    text-align: center;
  }
}
</style>

