import Vue from "vue";
import compose2 from "./compose2";//引用组件有好多种方式3：


//引用组件有好多种方式1：
/* const component1 = {
    template: `<div>
     <h4>{{message}}--name:{{name}} </h4>
        <h3 v-show="active"><slot></slot> active=true 就能看到</h3>

    </div>`,
    data() {
        return {
            message: "哈哈"
        };
    },
    props: {
        active: {
            type: Boolean
        },
        name: {
            required: true,
            type: String,
        }
    }
}
//这个全局使用各组件，和下面定义中引用一样。：
Vue.component("comp1", component1); */

//这种方式通过extend，获取组件
/* const vuec = Vue.extend(compose2);
new vuec({
    el: "#app222",
    propsData: {
        active: true
    }
}); */
//引用组件有好多种方式：
var app = new Vue({
    el: "#app222",
    data: {
        isactive: true,
        text: 'phil',
    },
    components: {
        "comp1": compose2
    },
    template: `
    <div>
        <comp1 :active="!isactive"  :text="text" @onchange1="changeText">aa</comp1>
        <comp1 :active="isactive" :text="text" @onchange1="changeText">bb</comp1>

    </div>
    `,
    methods: {
        changeText() {
            return this.text += "aa";
        }
    }


})

