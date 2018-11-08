import Vue from "vue";
import demo from "./demo.vue";//这里如果有同名的js，需要加入后缀.vue
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import store from "../store/store.js";

var app = new Vue({
    el: "#app222",
    store,
    components: {
        "demo": demo
    },

    template: `<demo/>`
});
