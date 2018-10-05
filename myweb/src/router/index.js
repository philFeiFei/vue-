import Vue from "vue";
import Router from "vue-router";
import Test from "@/components/Test";
import Hello from "@/components/HelloWorld";
import player from "@/components/player";
import playerProfile from "@/components/profile";
import playerStatus from "@/components/status";

Vue.use(Router);

export default new Router({
    routes: [
        //不同的url，加载不同的模版。
        {
            path: "/",
            name: "HelloWorld",
            components: {
                Hello: Hello,

            }
        },
        {
            path: "/test",
            name: "Test",
            component: Test
        },
        {
            path: "/player/:uid",
            name: "player",
            component: player,
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
