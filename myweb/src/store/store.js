import Vue from "vue";
import Vuex from "vuex";
import defaultState from "./state";
import defaultMutations from "./mutation"
import defaultGetters from "./getters"
import defaultModuleA from "./modulea"
Vue.use(Vuex);


export default () => {

    const store = new Vuex.Store({
        state: defaultState,
        mutations: defaultMutations,//同步操作
        getters: defaultGetters,
        actions: {//实现异步操作
            incrementAsync(context, n) {
                //setTimeout(context.commit('increment', n), 2000);
                setTimeout(() => {
                    context.commit('increment', { num1: n })//这里面num1必须在mutations中存在。
                }, 1000)
            }
        },
        modules: {
            a: defaultModuleA
        }
    })
    //hot update---------
    if (module.hot) {
        module.hot.accept([
            './state',
            './mutation',
            './getters',
            './modulea'
        ], () => {
            const newState = require('./state').default
            const newMutation = require('./mutation').default
            const newGetters = require('./getters').default
            const newModuleA = require('./modulea').default

            store.hotUpdate({
                state: newState,
                mutations: newMutation,
                getters: newGetters,
                modules: {
                    a: newModuleA
                },
            })
        })

    }
    return store
}

