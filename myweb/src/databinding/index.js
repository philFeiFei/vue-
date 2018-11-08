import Vue from "vue";
Vue.config.productionTip = false;
var app = new Vue({
    el: "#app222",
    template: `
        <div :class="['aaa',{active:!isActive}]"
            :style="['style1',style2]"
        >{{isActive?'active':'not active'}}
        <p><input type="checkbox" name="哈喽" value="哈喽" :style="style3">aaa</p>
        <p v-once>firstName:{{firstName}}  ; lastName:{{lastName}}</p>
        <p><input type="text" v-model="firstName"></p>
        <p><input type="text" v-model="lastName"></p>
        <p>name:{{name}}</p>

        <li v-for="(a,index) in arr" :key="a">{{a}} index:{{index}}</li>

        <li v-for="(key,val,index) in obj">{{val}} {{key}}  index:{{index}}</li>

        1<input type="checkbox" :value="1"  v-model="arr1">
        2<input type="checkbox" :value="2"  v-model="arr1">
        3<input type="checkbox" :value="3" v-model="isSelected">
        <p>{{arr1}}</p> <p>描述一下通过computed：{{arr1Desc}}</p>

        <input type="radio" value="1"  v-model="isSelected">
        <input type="radio" value="2"  v-model="isSelected">
         <input type="radio" value="1"  name="isSelected">
        <input type="radio" value="2"  name="isSelected">




    </div>
    `,
    data: {
        isActive: false,
        firstName: 'li',
        lastName: 'Phil',
        arr: [1, 2, 3],
        arr1: [],
        isSelected: true,
        obj: {
            name: 'phil',
            sex: '男',
            age: 33,
        },
        style2: {
            color: 'blue',
            fontWeight: 'bold',
            fontSize: '22px',
            appearance: 'none'

        },
        style3: {
            appearance: 'none'

        }
    },
    computed: {
        name() {
            //return this.firstName +" "+ this.lastName;  //传统的js拼接
            //es6支持${变量}语法，这样可以实现变量与字符串等无缝连接
            //下面并且使用了字符串模版。直接写入。
            return `
                ${this.firstName}
                ${this.lastName} 是我的全名
            `;

        },
        arr1Desc() {
            return this.arr1.toString();
        }
    }
})

