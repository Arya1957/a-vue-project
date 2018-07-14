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
               v-for="(subitem,i) in resume[item.field]">
            <div class="resumeField"
                 v-for="(value,key) in subitem">
              <label>{{key}}</label>
              <input type="text" v-bind:value="value"
                     v-on:click="changeResumeField(`${item.field}.${i}.${key}`,$event.target.value)">
            </div>
            <hr>

          </div>
        </div>

        <div v-else class="resumeField"
             v-for="(value,key) in resume[item.field]">
          <label>{{key}}</label>
          <input type="text" v-bind:value="value"
          v-on:input="changeResumeField(`${item.field}.${key}`,$event.target.value)">
          <!--<input type="text" v-model="resume[item.field][key]">-->
        </div>
      </li>

    </ol>
  </div>
</template>


<script>
  export default {
    name: 'ResumeEditor',

    computed: {
      selected: {
        get: function () {
          return this.$store.state.selected
        },
        set: function (value) {
          return this.$store.commit('switchTab', value)
        }
      },
      resume() {
        return this.$store.state.resume
      }
    },
    methods: {
      changeResumeField: function (path, value) {
        this.$store.commit('updateResume', {
          path,
          value
        })
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
