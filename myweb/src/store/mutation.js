export default {//这个是操作store中数据的唯一方式。
    increment: (state, { num1, num2 }) => {
        console.log("num1=" + num1);
        console.log("num2=" + num2);
        //num2的可以不传，不传入时num2默认为1
        if (typeof num2 === 'undefined') {
            num2 = 1
        }
        state.count += (num1 + num2)
    },
    decrement(state) {
        setTimeout(() => {
            state.count--
        }, 10)
    }
}
