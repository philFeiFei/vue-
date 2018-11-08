import Vue from "vue";
import featureC from "./highFeature.vue";//这里如果有同名的js，需要加入后缀.vue

var app = new Vue({
    el: "#app222",
    components: {
        "featureC": featureC
    },
    data: {
        ccc: "23232323"
    },
    methods: {
        changeM() {
            this.ccc += "q";
        }
    },
    mounted() {
        console.log(this.$refs.fea);
        console.log(this.$refs.bod);
    },
    template: `
    <featureC :ccc="ccc" @changeMsg="changeM" ref="fea">
        <span slot="header">header</span>
        <span slot="body" ref="bod">body</span>
        <span slot-scope="props">{{props.aaa}}{{props.bbb}}</span>
    </featureC>

    `
});
