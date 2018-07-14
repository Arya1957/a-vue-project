<template>
  <div>
    <form v-on:submit.prevent="signUp">
      <div class="row">
        <label>用户名</label>
        <input type="text" v-model="formData.username" required>
        <!--必填字段-->
      </div>
      <div class="row">
        <label>密码</label>
        <input type="password" v-model="formData.password" required>
      </div>
      <div class="actions">
        <input type="submit" value="提交">
        <span class="errorMessage">{{errorMessage}}</span>
      </div>
    </form>
  </div>
</template>

<script>
  import AV from '../lib/leancloud.js'
  import getErrorMessage from '../lib/getErrorMessage'
  import getAVUser from '../lib/getAVUser.js'


  export default {
    name: 'SignUpForm',
    data(){
      return {
        formData: {
          username: '',
          password: ''
        },
        errorMessage: ''
      }
    },

    methods: {
      signUp (){
        let {username,password} = this.formData;
        // 新建 AVUser 对象实例
        var user = new AV.User();
        // 设置用户名
        user.setUsername(username);
        // 设置密码
        user.setPassword(password);
        // 设置邮箱
//   user.setEmail('tom@leancloud.cn'); //这次暂时没用到
        user.signUp().then( ()=> {
          this.$emit('success',getAVUser())
        },  (error) =>{
          console.log(error);
         this.errorMessage = getErrorMessage(error)
        });
      }
    }
  }

</script>
