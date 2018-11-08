export default {
    //相当于组件中的computed。。对state的数据简单的组装。然后返回
    getA(state) {
        return state.count + 12;
    }
}
