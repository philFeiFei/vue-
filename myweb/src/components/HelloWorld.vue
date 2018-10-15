<template>
  <div class="hello">

      <!-- axios测试  开始-->
      <ul>
          <li>axios测试：http://localhost:8081/lxf/servlet/GetVueInfo</li>
          <li>绑定vue的this对象给_self，方便后面使用,这里是vue axios请求实例，最简单的</li>
          <li>后台返回的response，通过response.data获取即转成前台的obj</li>
          <li>后台如果是单个对象，这样获取：empl.displayName</li>
        <li>后台如果是对象集合，这样获取：empl[0].displayName</li>

      </ul>
 <p>你好，{{name}}，欢迎您的到来.您访问了./hello</p>
    <pre>{{name}}的学号是：{{id}}</pre>
  <!-- axios测试  结束-->

<!-- vuex store测试  开始-->
    <p>我再helloword中此刻，但是我也能访问store中的数据$store.state.count:{{$store.state.count}}</p>
    <p>组件data的属性vuexCount是不会变化的(只有第一次才会获取)，需要用computed vuexCount():{{vuexCount}}</p>
<!-- vuex store测试  结束-->
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      id: 1,
      name: ""
    };
  },
  computed: {
    vuexCount() {
      return this.$store.state.count;
    }
  },
  mounted() {
    var _self = this; //此处绑定vue的this对象给_self，方便后面使用
    this.axios
      .post("http://localhost:8081/lxf/servlet/GetVueInfo")
      .then(function(response) {
        var empl = response.data;
        _self.name = empl[0].displayName; //绑定后台数据到vue属性上面
        _self.id = empl[0].associateId; //绑定后台数据到vue属性上面
      })
      .catch(function(error) {
        console.log("error:" + error);
      });
  }
};
</script>


