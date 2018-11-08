import Vue from "vue";


var app = new Vue({
    //el: "#app222",
    template: `<div>{{message}}</div>`,
    data: {
        message: "Hello 你好",
    },
    beforeCreate() {
        console.log("beforeCreate");
    },
    created() {
        console.log("created");
    },
    beforeMount() {

        console.log("beforeMount");
    },
    mounted() {
        console.log("mounted");
    },
    beforeUpdate() {
        console.log("beforeUpdate");
    },
    updated() {
        console.log("updated");
    },
    beforeDestroy() {
        console.log("beforedestroy");
    },
    destroyed() {
        console.log("distroyed");
    },
    errorCaptured: (err, vm, info) => {
        cnosole.log("err=" + err);
    },

});

app.$mount("#app222");
app.$data.message = 333;
app.message = 444;
//throw new TypeError("mount出错了，能否捕捉到呢？？");
//app.$destroy();
