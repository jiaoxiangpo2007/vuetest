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
        activeClass: 'active',
        errorClass: 'text-danger',
        ok: true,
        type: 'B',
        items: [
            { message: 'Foo', id: 1 },
            { message: 'Bar', id: 2 }
        ],
        object: {
            firstName: 'John',
            lastName: 'Doe',
            age: 30
        },
        pushDetails: '',
        arrData: '{"message":"FooD","id":1}'
    },
    computed: {

    },
    methods: {
        chgClass: function () {
            this.classObject = this.classObject.active ? {
                active: false,
                'text-danger': true
            } : {
                    active: true,
                    'text-danger': false
                };
            this.ok = this.ok ? false : true;
        },
        pushArray: function () {
            if (this.pushDetails) {
                this.items.push(JSON.parse(this.pushDetails));
            }
        },
        arraySet: function () {
            let arr = JSON.parse(this.arrData);
            Vue.set(this.items, arr.id - 1, arr);
        }
    }
})


var demo02Vm = new Vue({
    el: '#demo02',
    data: {
        userProfile: {
            name: 'Anika'
        },
        newValue: '',
        numbers: [0, 1, 2, 3, 4, 5]
    },
    computed: {
        evenNumbers: function () {
            return this.numbers.filter(function (number) {
                console.log(number);
                return number % 2 === 0;
            })
        },
        todos: function () {
            return [1, 2];
        }
    },
    methods: {
        reset: function () {
            let arr = JSON.parse(this.newValue);
            for (let key in arr) {
                this.$set(this.userProfile, key, arr[key]);
            }

        },
        resetMulti: function () {
            let arr = JSON.parse(this.newValue);
            this.userProfile = Object.assign({}, this.userProfile, arr);
        },
        even: function (numbers) {
            return numbers.filter(function (number) {
                return number % 2 == 1
            })
        }
    }
})

var demo03Vm = new Vue({
    el: '#demo03',
    data: {
        newTodoText: '',
        todos: [
            {
                id: 1,
                title: 'Take out the trash'
            },
            {
                id: 2,
                title: 'Take out the trash'
            },
            {
                id: 2,
                title: 'Mow the lawn'
            }
        ],
        nextTodoId: 4
    },
    computed: {

    },
    methods: {
        addNewTodo: function () {
            this.todos.push({
                id: this.nextTodoId++,
                title: this.newTodoText
            })
            this.newTodoText = ''
        }
    },
    component: {
        'todo-item': {
            name: 'todo-item',
            template: '\
            <li>\
            {{title}}\
            <button v-on:click="$emit(\'remove\')">x</button>\
            </li>\
            ',
            props: ['title']
        }
    }
})

let demo04Vm = new Vue({
    el: '#demo04',
    data: {
        counter: 0,
        name: 'Vuejs',
        message: '',
        checked: false,
        checkedNames: ['Mike'],
        picked: '',
        newPicked: '',
        selected: 'B',
        newSelected: [],
        options: [
            { text: 'one', value: 'A' },
            { text: 'two', value: 'B' },
            { text: 'three', value: 'C' }
        ],
        age: '',
        trim: ''
    },
    computed: {
        ageType: function () {
            return typeof (this.age);
        }
    },
    methods: {
        greet: function (event) {
            alert('Hello ' + this.name + '!');
            if (event) {
                alert(event.target.tagName);
            }
        },
        say: function (message) {
            alert(message);
        },
        warn: function (message, event) {
            if (event) event.preventDefault();
            alert(message);
        }
    }

});
Vue.component('my-component', {
    template: '<div>A custom component!</div>'
})

let demo05Vm = new Vue({
    el: '#demo05',
    data: {

    },
    computed: {

    },
    methods: {

    }
})

let demo07Vm = new Vue({
    el: '#demo07',
    data: {
        message: 'sdf'
    },
    components: ('child', {
        name: 'child',
        props: ['myMessage'],
        template: '<span>{{myMessage}}</span>'
    })
})

Vue.component('button-counter', {
    template: '<button v-on:click="incrementCounter">{{counter}}</button>',
    data: function () {
        return {
            counter: 0
        }
    },
    methods: {
        incrementCounter: function () {
            this.counter += 1
            this.$emit('increment')
        }
    }
})

var demo08Vm = new Vue({
    el: '#demo08',
    data: {
        total: 0
    },
    methods: {
        incrementTotal: function () {
            this.total += 1
        }
    }
})

let demo09Vm = new Vue({
    el: '#demo09',
    data: {
        show: true
    }
})

let demo10Vm = new Vue({
    el: 'demo10',
    directives: {
        focus: {
            inserted: function (el) {
                console.log('aa')
                el.focus()
            }
        }
    }
})

Vue.directive('demo',{
    bind:function(el,binding,vnode){
        var s = JSON.stringify
        el.innerHTML = 
        'name:' +s(binding.name) + '<br>' +
        'value:' +s(binding.value) + '<br>' +
        'expression:' +s(binding.expression) + '<br>' +
        'argument:' +s(binding.arg) + '<br>' +
        'modifiers:' +s(binding.modifiers) + '<br>' +
        'vnode_keys:' + Object.keys(vnode).join(',')        
    }
})

let demo11VM = new Vue({
    el:'#demo11',
    data:{
        message:'hello!'
    }
})

Vue.component('demo12',{
    render:function(createElement){
        return createElement(
            'h' + this.level,
            {name:'nh2',class:'btn btn-default','v-html':'姓名'},
            [
                'This is vnode',
                createElement('p','A top news'),
            ]
        )
    },
    props:{
        level:{
            type:Number,
            required:true
        }
    }
})

let demo12Vm = new Vue({
    el:'#demo12',
    data:{
        level:1
    }
})