<template>
  <div id="resumeEditor">
    <nav>
      <ol>
        <li v-for="(item,index) in resume.config"
            v-bind:class="{ active: item.field === selected }"
            v-on:click="selected = item.field"
        >
          <svg class="icon">
            <use v-bind:xlink:href="`#icon-${item.icon}`"></use>
          </svg>
        </li>
      </ol>
    </nav>
    <ol class="panels">
      <li v-for="item in resume.config"
          v-show="item.field === selected">

        <div v-if="resume[item.field] instanceof Array">
          <div class="subitem"
               v-for="subitem in resume[item.field]">
            <div class="resumeField"
                 v-for="(value,key) in subitem">
              <label>{{key}}</label>
              <input type="text" v-bind:value="value">
            </div>
            <hr>

          </div>
        </div>

        <div v-else class="resumeField"
             v-for="(value,key) in resume[item.field]">
          <label>{{key}}</label>
          <input type="text" v-model="resume[item.field][key]">
        </div>

      </li>
    </ol>
  </div>
</template>


<script>
  export default {
    name: 'ResumeEditor',
    data: function () {
      return {
        selected: 'profile',
        resume: {
          config: [
            {field: 'profile', icon: 'id'},
            {field: 'workHistory', icon: 'work'},
            {field: 'education', icon: 'book'},
            {field: 'projects', icon: 'heart'},
            {field: 'awards', icon: 'cup'},
            {field: 'contacts', icon: 'phone'},
          ],
          profile: {
            name: '暖暖',
            city: '天天',
          },
          workHistory: [
            {company: '', content: '我的第二份工作是'},
            {company: '', content: '我的第一份工作是'}
          ],
          education: [
            {school: '',major: ''}
            ],
          projects: [
            {name: 'projectA',content: 'detailed info.'},
            {name: 'projectB',content: 'detailed info.'}
          ],
          awards: [
            {name: 'awards A',content: 'detailed info.'},
            {name: 'awards B',content: 'detailed info.'}
          ],
          contacts: [
            {contacts: 'phone',content: '133444'},
            {contacts: 'weixin',content: '638890002'}
          ],
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  #resumeEditor {
    background: #fff;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .3);
    display: flex;
    flex-direction: row;
    > nav {
      width: 80px;
      background: black;
      color: white;
      > ol {
        > li {
          height: 48px;
          display: flex;
          justify-content: space-around;
          align-items: center;
          margin-top: 16px;
          margin-bottom: 16px;
          &.active {
            background: #fff;
            color: black;
          }
        }
      }
    }

    > .panels {
      flex-grow: 1;
      > li {
        padding: 24px;
      }
    }
  }

  ol {
    list-style: none;
  }

  .resumeField {
    > label {
      display: block;
    }

    input[type=text] {
      margin: 16px 0;
      border: 1px solid #ddd;
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.25);
      width: 100%;
      height: 40px;
      padding: 0 8px;
    }
  }

  svg.icon {
    width: 24px;
    height: 24px;
  }

  hr {
    border: none;
    border-top: 1px solid #ddd;
    margin: 24px 0;
  }
</style>
