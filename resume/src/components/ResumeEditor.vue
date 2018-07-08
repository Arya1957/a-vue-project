<template>
  <div id="resumeEditor">
   <nav>
     <ol>
       <li v-for="(item,index) in resume.visibleItems"
         v-bind:class="{active: item === selected}"
           v-on:click = "selected = item"
       >{{index}}</li>
     </ol>
   </nav>
    <ol class="panels">
      <li v-for="item in resume.visibleItems"
          v-show = "item === selected">
        {{resume[item]}}   </li>
    </ol>
  </div>
</template>


<script>
  export default{
    name: 'ResumeEditor',
    data: function (){
      return {
        selected: 'bio',
        resume: {
          visibleItems: ['bio','workHistory','education','projects','awards','contacts','others'],
          bio: {
            name: '王大锤',
            city: '天天',
            title: 'shsjsk'
          },
          'workHistory': [],
          'education': [],
          'projects': [],
          'awards': [],
          'contacts': [],
          'others': []
        }
      }
    }
  }
</script>

<style lang="scss">
  #resumeEditor{
    background: #fff;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.3) ;
    display: flex;
    flex-direction: row;
    >nav {
      width: 80px;
      background: black;
      color: white;
      >ol {
        >li {
          height: 48px;
          display: flex;
          justify-content: space-around;
          align-items: center;
          margin-top: 16px;
          margin-bottom: 16px;
          &.active{
            background: #fff;
            color: black;
          }
        }
      }
    }
  }

  ol {
    list-style: none;
  }
</style>
