import Vue from "vue";
import Router from "vue-router";
import Test from "@/components/Test";
import Hello from "@/components/HelloWorld";
import player from "@/components/player";
import playerProfile from "@/components/profile";
import playerStatus from "@/components/status";
import vuexTest from "@/components/vuexTest";

Vue.use(Router);

export default new Router({
    routes: [
        //不同的url，加载不同的模版。
        {
            path: "/",
            name: "HelloWorld",
            components: {//这种写法是指定了，router-view的name必须是Hello才会展示此组件
                Hello: Hello

            }
        },
        {
            path: "/test",
            name: "Test",
            components: {
                Test: Test
            }
        },
        {
            path: "/player/:uid",
            name: "player",
            component: player,//这种写法是指定了，没有name的router-view会展示此组件
            children: [
                {
                    path: 'profile',
                    component: playerProfile
                },
                {
                    path: 'status',
                    component: playerStatus
                }
            ]
        }
    ]
});
