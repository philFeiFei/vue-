export default {
    namespaced: true,//不支持热加载。。呵呵
    state: {//不支持热加载
        aaa: 2223231111
    },
    getters: {
        getaaa(state) {
            return state.aaa + "单独111";
        }
    }
}
