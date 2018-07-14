<template>
  <div id="topBar">
    <div class="wrapper">
      <span class="logo">
        resumer
      </span>
      <div class="actions">

        <div v-if="logined" class="userActions">
          <span>你好，{{user.username}}</span>
          <a href="#" class="button"
          v-on:click.prevent="signOut">登出</a>
        </div>
        <div v-else class="userActions">
          <a href="#" class="button primary"
             v-on:click.prevent="signUpDialogVisible = true"
          >注册</a>
          <MyDialog
            title="注册" v-bind:visible="signUpDialogVisible"
            v-on:close="signUpDialogVisible=false">
            <signUpForm v-on:success="signIn($event)"></signUpForm>
          </MyDialog>
          <a href="#" class="button">登录</a>
        </div>
        <button class="button primary">保存</button>
        <button class="button">预览</button>
      </div>
    </div>
  </div>
</template>

<script>
  import MyDialog from './MyDialog.vue'
  import SignUpForm from './SignUpForm.vue'
  import AV from '../lib/leancloud.js'

  export default {
    name: 'TopBar',
    data: function () {
      return {
        signUpDialogVisible: false
      }
    },
    computed: {
      user() {
        return this.$store.state.user
      },
      logined(){
        return this.user.id
      }
    },
    components: {
      SignUpForm,
      MyDialog
    },
    methods: {
      signIn(user) {
        console.log(user);
        this.signUpDialogVisible = false;
        this.$store.commit('setUser', user)
      },
      signOut(){
        AV.User.logOut();
        this.$store.commit('removeUser')
      }
    }
  }
</script>

<style lang="scss" scoped>
  #topBar {
    background: #fff;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .3);
    height: 64px;

    > .wrapper {
      min-width: 1024px;
      max-width: 1440px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 16px;
    }

    .logo {
      font-size: 24px;
      color: #000;
    }
  }

  .button {
    width: 72px;
    height: 32px;
    border: none;
    cursor: pointer;
    font-size: 18px;
    background: #ddd;
    color: #222;
    text-decoration: none;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    &:hover {
      box-shadow: 1px 1px 1px hsla(0, 0, 0, 0.5)
    }
    &.primary {
      background: #02af5f;
      color: #fff;
    }
  }

  .actions {
    display: flex;
    .userActions {
      margin-right: 3em;
    }
  }

</style>
