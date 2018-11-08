import Vue from "vue";
import routerdemo from "./routerDemo.vue"
import store from "../store/store.js";
import element from "element-ui";
import "element-ui/lib/theme-chalk/index.css"
import "bootstrap/dist/css/bootstrap.min.css";
import vueRouter from "vue-router";
import createRouter from "../router";


Vue.use(element);
const router = createRouter();
router.beforeEach((to, from, next) => {//这里面的to/form是router对象，包含name、fullpath等属性
    console.log(to);
    console.log(to.fullPath);
    console.log(from.fullPath);
    //这里面常用于判断页面是否处于登录状态。。
    next();
});
router.beforeResolve((to, from, next) => {
    console.log("beforeResolve");
    next();
});
router.afterEach((to, from) => {
    console.log("afterEach");
});
Vue.use(vueRouter);
var app = new Vue({
    el: "#app222",
    router,
    store,
    components: { routerdemo },//这个表示要使用这个模版，这样才可以使用这个模版，就当做标签来用即可。（<app></app>)
    template: "<routerdemo/>",  //表示vue的模版是用哪个。这个会自动注入 index.html中。index.html中id=#app的部分会被代替。
    data: {
        welcome: "wel",
    }
});

