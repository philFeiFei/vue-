import Vue from "vue";
import renderD from "./renderDemo.vue";
import element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "bootstrap/dist/css/bootstrap.min.css";

Vue.use(element);
var app = new Vue(
    {

        el: "#app222",
        components: {
            renderD,
        },
        //template: `<renderD/>`,//这个template最终其实执行的是下面render方法。
        render(createElement) {
            return createElement('renderD')
        }

    }
)
