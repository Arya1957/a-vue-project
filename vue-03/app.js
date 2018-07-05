import Vue from 'vue';
import AV from 'leancloud-storage'

let APP_ID = 'fubRKob5ombKpfC0jqcYo4d5-gzGzoHsz';
let APP_KEY = 'LL25S9QYDBzrNtUAqPwbpawD';

AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});

let app = new Vue({
    el: '#app',
    data: {
        newTodo: '',
        todoList: [],
        currentUser: null,
        actionType: 'signUp',
        formData: {
            username: '',
            password: ''
        }

    },
    created: function(){
        window.onbeforeunload = ()=>{
            let dataStr = JSON.stringify(this.todoList);
            window.localStorage.setItem('myTodos',dataStr)
        };
        let oldData = JSON.parse(window.localStorage.getItem('myTodos'));
        console.log(oldData);
        this.todoList = oldData || [];
        this.currentUser = this.getCurrentUser() // 一开始就获取当前用户
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
        },
        signUp: function(){
            let user = new AV.User();
            // 设置用户名
            user.setUsername(this.formData.username);
            // 设置密码
            user.setPassword(this.formData.password);
            user.signUp().then( (loggedInUser)=> {
                this.currentUser = this.getCurrentUser();
            }, function (error) {
                alert('注册失败')
            });
        },
        login: function(){
            AV.User.logIn(this.formData.username, this.formData.password).then( (loggedInUser)=> {
               this.currentUser = this.getCurrentUser();
            }, function (error) {
                alert('登录失败')
            });
        },
        getCurrentUser: function(){
            let current = AV.User.current();
            if(current){
                let {id,createdAt,attributes:{username}} = current;
                /*  上面这句话等价于下面这些：
                let obj = AV.User.current();
                let id = obj.id;
                let createdAt = obj.createdAt;
                let username = obj.attributes.username;
                */
                return {id,username,createdAt}
            } else {
              return null
            }

        },
        logout: function(){  //注销登录
            AV.User.logOut();
            // 现在的 currentUser 是 null 了
             this.currentUser = AV.User.current();
        }

    }


}) ;