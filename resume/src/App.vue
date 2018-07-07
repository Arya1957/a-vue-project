<template>
  <div>
    <p>{{text}}~</p>
  </div>

</template>

<script>
export default {
  name: 'App',
  data: function(){
    return {
      text: '你好呀~ '
    }
  }
}
</script>

<style>
p{
  color: red
}
</style>
