import Vue from 'vue'
import App from './app.vue'
import './assets/styles/global.styl';


const root = document.createElement('div');
document.body.appendChild(root);

//https://blog.csdn.net/knqiufan/article/details/79267093
//https://blog.csdn.net/github_37516320/article/details/78321391
//上面两个地址可以理解下面几句的含义
new Vue({
    render: (h) => h(App)
}).$mount(root)

/* new Vue({
    el: "#app",
    router,
    components: { App },
    template: "<App/>"
}); */