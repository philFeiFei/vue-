import Vue from "vue";
import Router from "vue-router";
import Test from "@/components/Test";
import Hello from "@/components/HelloWorld";
import player from "@/components/player";
import playerProfile from "@/components/profile";
import playerStatus from "@/components/status";
import vuexTest from "@/components/vuexTest";
import Layout from '@/components/Layout'
//import login from "@/components/login.vue";//如果采用异步加载则不需要最开始引入组件

export default () => {
    return new Router({
        routes: [
            //不同的url，加载不同的模版。
            {
                path: "/",
                components: {//这种写法是指定了，router-view的name必须是Hello才会展示此组件
                    Hello: Hello

                },
            },
            {
                path: "/login",
                // component: login  //这种方式直接用router view渲染不需要加name
                component: () => import("@/components/login.vue")

            },
            {
                path: "/test",
                components: {//这种写法是指定了，router-view的name仍然是必须的，name=test
                    Test
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
            },

            {
                path: '/menu1',
                component: Layout,
                redirect: '/menu1/index1111',
                children: [
                    {
                        path: 'index1111',
                        component: () => import('@/components/menu1InLayout'),
                        name: 'Tab',
                        meta: { title: 'tab', icon: 'tab' }
                    }
                ]
            },
            {
                path: '/menu2',
                component: Layout,
                children: [
                    {
                        path: '',
                        component: () => import('@/components/menu2InLayout'),
                        name: 'Tab',
                        meta: { title: 'tab', icon: 'tab' }
                    }
                ]
            },
        ],
        // mode: 'history',
    });
}
