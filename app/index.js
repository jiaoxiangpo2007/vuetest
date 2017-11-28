import Vue from 'vue/dist/vue.js';
var data = { a: 'Vue', time: 0, getTime: 0, getNow: '', isActive: true, hasError: '' };
var vm = new Vue({
    el: '#app',
    data: data,
    computed: {
        reverseA: function () {
            return this.a.split('').reverse().join('');
        },
        now: function () {
            this.time++;
            return Date.now();
        }
    },
    watch: {
        a: function () {
            this.getNowDetails();
        }
    },
    methods: {
        getNowDetails: function () {
            this.getTime++;
            console.log(this.getTime);
            this.getNow = Date.now();
        }
    }
})

var demo01Vm = new Vue({
    el: "#demo01",
    data: {
        classObject: {
            active: true,
            'text-danger': false
        },
        activeClass:'active',
        errorClass:'text-danger',
        ok:true,
        type:'B',
        items:[
            {message:'Foo',id:1},
            {message:'Bar',id:2}
        ],
        object:{
            firstName:'John',
            lastName:'Doe',
            age:30
        },
        pushDetails:'',
        arrData:'{"message":"FooD","id":1}'
    },
    computed:{
        
    },
    methods: {
        chgClass: function () {
            this.classObject =this.classObject.active ? {
                active: false,
                'text-danger': true
            }: {
                active: true,
                'text-danger': false
            };
            this.ok = this.ok? false:true;
        },
        pushArray:function(){
            this.items.push(JSON.parse(this.pushDetails));
        },
        arraySet:function(){
            let arr = JSON.parse(this.arrData);
            Vue.set(this.items,arr.id-1,arr);
        }
    }
})