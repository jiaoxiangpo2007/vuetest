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
    },
    methods: {
        chgClass: function () {
            this.classObject = {
                active: false,
                'text-danger': true
            }
        }
    }
})
