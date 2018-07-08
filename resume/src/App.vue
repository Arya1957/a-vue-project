<template>
  <div class="page">
    <header>
      <TopBar/>
    </header>
    <main>
      <ResumeEditor/>
      <ResumePreview/>
    </main>

  </div>

</template>

<script>
  import './assets/reset.css'
  import 'normalize.css/normalize.css'

  import TopBar from './components/TopBar.vue'
  import ResumeEditor from './components/ResumeEditor.vue'
  import ResumePreview from './components/ResumePreview.vue'
  import icons from './assets/icons.js'


  export default {
    name: 'app',
    data: function () {
      return {
        text: '你好呀~ '
      }
    },
    components: {TopBar, ResumeEditor, ResumePreview},
    created: function (){
      document.body.insertAdjacentHTML('afterbegin',icons)
    }

  }
</script>

<style lang="scss">
  .page {
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: #EAEBEC;
    > main {
      align-self: center;
      width: 100%;
      /*这两句是为了修复当分辨率大于1440时，main不居中的问题*/
      flex-grow: 1;
      min-width: 1024px;
      max-width: 1440px;
      margin-top: 16px;
      margin-bottom: 16px;
      display: flex;
      justify-content: space-between;
      padding: 0 16px;

    }
  }
  #resumeEditor {
    width: 35%;
    background: #444;

  }

  #resumePreview {
    flex-grow: 1;
    margin-left: 16px;
    background: #777;

  }

  svg.icon {
    height: 1em;
    width : 1em;
    fill: currentColor;
    vertical-align: -0.1em;
    font-size: 16px;
  }

</style>
