// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import vueAxios from "vue-axios";
import store from "./store/store.js"

Vue.use(vueAxios, axios);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: "#app222",
    router,
    store,
    components: { App },//这个表示要使用这个模版，这样才可以使用这个模版，就当做标签来用即可。（<app></app>)
    //template: "<App/>",
    template: "<app/>"  //表示vue的模版是用哪个。这个会自动注入 index.html中。index.html中id=#app的部分会被代替。
});

