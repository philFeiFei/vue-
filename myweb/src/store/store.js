import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);



export default new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {//这个是操作store中数据的唯一方式。
        increment: (state, n) => state.count += n,
        decrement(state) {
            setTimeout(() => {
                state.count--
            }, 2000)
        }
    },
    getters: {
        getA(state) {
            return state.count + 100;
        }
    },
    actions: {
        incrementAsync(context, n) {
            //setTimeout(context.commit('increment', n), 2000);
            setTimeout(() => {
                context.commit('increment', n)
            }, 2000)
        }
    }
})
