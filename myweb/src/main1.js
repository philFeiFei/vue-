// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";//默认使用内部的index.js..
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import vueAxios from "vue-axios";
import store from "./store/store.js"

import vueRouter from "vue-router";
import createRouter from "./router";

const router = createRouter();

Vue.use(vueAxios, axios, vueRouter);

Vue.config.productionTip = false;

/*创建vue 方式一 */
var app = new Vue({
    el: "#app222",
    router,
    store,
    components: { App },//这个表示要使用这个模版，这样才可以使用这个模版，就当做标签来用即可。（<app></app>)
    template: "<app/>",  //表示vue的模版是用哪个。这个会自动注入 index.html中。index.html中id=#app的部分会被代替。
    //template: `<div>data:{{welcome}}</div>`,
    data: {
        welcome: "wel",
    }
});


/*创建vue 方式二 */
/* var app = new Vue({
    el: "#app222",
    router,
    store,
    render: h => h(App),
    data: {
        welcome: "wel",
    }
}); */
console.log("How to get the ??app=" + typeof app);
console.log("app.$children=" + app.$children);


/*创建vue 方式三 */
/* new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app222") */

/*创建vue 方式四 */
/* const app = new Vue({
    router,
    store,
    render: b => b(App), //这是render函数。最终方式一执行的也是这个render函数。
});
app.$mount("#app222"); */

