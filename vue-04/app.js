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
    created: function () {
        this.currentUser = this.getCurrentUser();
        // 一开始就获取当前用户
        this.fetchTodos()
    },
    methods: {
        fetchTodos: function () {

            if (this.currentUser) {
                let query = new AV.Query('TodoFolder');
                query.find().then( (todos) => {

                    let todoFolder = todos[0];
// console.log(JSON.parse(todoFolder.attributes.content));
                    this.todoList = JSON.parse(todoFolder.attributes.content);
                    this.todoList.id = todoFolder.id;
                    console.log(this.todoList);
                }, function (error) {
                    console.log('error')
                });
            }
        },
        updateTodos: function () {
            let str = JSON.stringify(this.todoList);
            let todoFolder = AV.Object.createWithoutData('TodoFolder', this.todoList.id);
            todoFolder.set('content', str);
            todoFolder.save().then((todos) => {
                console.log(todos);

                console.log('这是UpdateTodos');
            })
        },
        saveTodos: function () {
            let dataStr = JSON.stringify(this.todoList);
            //  使用 leancloud来保存数据
            let TodoFolder = AV.Object.extend('TodoFolder');
            // 新建对象
            let todoFolder = new TodoFolder();
            // 设置名称
            let acl = new AV.ACL();
            acl.setReadAccess(AV.User.current(), true); // 只有这个用户可读
            acl.setWriteAccess(AV.User.current(), true); // 只有这个用户可写
            todoFolder.set('content', dataStr);
            todoFolder.setACL(acl);
            // 将 ACL 实例赋予 todoFolder 对象， 添加访问控制

            todoFolder.save().then((todo) => {
                this.todoList.id = todo.id; //  这一步非常关键
                console.log('这是 saveTodos');

            }, function (error) {
                console.error('保存失败');
            });
        },
        saveOrUpdateTos: function () {
            if (this.todoList.id) {
                this.updateTodos()
            } else {
                this.saveTodos()
            }
        },
        addTodo: function () {
            this.todoList.push({
                title: this.newTodo,
                createdAt: new Date(),
                done: false
            });
            this.newTodo = '';
            this.saveOrUpdateTos()
        },
        removeTodo: function (todo) {
            let index = this.todoList.indexOf(todo);
            this.todoList.splice(index, 1);
            this.saveOrUpdateTos()
        },

        signUp: function () {
            let user = new AV.User();
            // 设置用户名
            user.setUsername(this.formData.username);
            // 设置密码
            user.setPassword(this.formData.password);
            user.signUp().then((loggedInUser) => {
               //  console.log(loggedInUser);
                this.currentUser = this.getCurrentUser();
            }, function (error) {
                alert('注册失败')
            });
        },
        login: function () {
            AV.User.logIn(this.formData.username, this.formData.password).then((loggedInUser) => {
              //  console.log(loggedInUser);
                this.currentUser = this.getCurrentUser();
                this.fetchTodos();//  登录成功后获取TODO
            }, function (error) {
                alert('登录失败')
            });
        },
        getCurrentUser: function () {
            let current = AV.User.current();
            if (current) {
                let {id, createdAt, attributes: {username}} = current;
                /*  上面这句话等价于下面这些：
                let obj = AV.User.current();
                let id = obj.id;
                let createdAt = obj.createdAt;
                let username = obj.attributes.username;
                */
                return {id, username, createdAt}
            } else {
                return null
            }

        },
        logout: function () {  //注销登录
            AV.User.logOut();
            // 现在的 currentUser 是 null 了
            this.currentUser = AV.User.current();
            // console.log(this.currentUser)
        }

    }


});

