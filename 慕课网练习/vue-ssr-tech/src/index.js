import Vue from 'vue'
import App from './app.vue'
import './assets/styles/test.css';
import './assets/styles/test-stylus.styl';
import './assets/images/01.jpg';
import './assets/js/test.js';

const root = document.createElement('div');
document.body.appendChild(root);

//https://blog.csdn.net/knqiufan/article/details/79267093
//https://blog.csdn.net/github_37516320/article/details/78321391
//上面两个地址可以理解下面几句的含义
new Vue({
    render: (h) => h(App)
}).$mount(root)

/* new Vue({
    el: "#test",
    router,
    components: { App },
    template: "<App/>"
}); */