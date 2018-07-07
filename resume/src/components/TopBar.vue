<template>
  <div id="topBar">
    <div class="wrapper">
      <span class="logo">
        resumer
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TopBar'
  }
</script>

<style>
  #topBar {
    background: #fff;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .3);
    height: 64px;
  }

  #topBar > .wrapper {
    min-width: 1024px;
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
  }

  #topBar .logo {
    font-size: 24px;
    color: #000;
  }
</style>
