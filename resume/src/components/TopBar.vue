<template>
  <div id="topBar">
    <div class="wrapper">
      <span class="logo">
        resumer
      </span>
      <div class="actions">
        <button class="primary">保存</button>
        <button>预览</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TopBar'
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

  button {
    width: 72px;
    height: 32px;
    border: none;
    cursor: pointer;
    font-size: 18px;
    background: #ddd;
    color: #222;
    &:hover {
      box-shadow: 1px 1px 1px hsla(0,0,0,0.5)
    }
    &.primary {
      background: #02af5f;
      color: #fff;
    }
  }

</style>
