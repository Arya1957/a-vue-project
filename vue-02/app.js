import bar from './bar';
import Vue from 'vue';

let app = new Vue({
    el: '#app',
    data: {
        newTodo: '',
        todoList: []
    },
    created: function(){
        window.onbeforeunload = ()=>{
            console.log(this);
            let dataStr = JSON.stringify(this.todoList);
            window.localStorage.setItem('myTodos',dataStr)
        };
        let oldData = JSON.parse(window.localStorage.getItem('myTodos'));
        console.log(oldData);
        this.todoList = oldData || []
    },
    methods: {
        addTodo: function (){
            this.todoList.push({
                title: this.newTodo,
                createdAt: new Date(),
                done: false
            });
            this.newTodo = ''
        },
        removeTodo: function(todo){
            let index = this.todoList.indexOf(todo);
            this.todoList.splice(index,1)
        }
    }


}) ;