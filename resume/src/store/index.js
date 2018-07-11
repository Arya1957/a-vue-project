import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex);


export default  new Vuex.Store({
  state: {
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
  },
  getters: {

  },
  mutations: {
    increment (state) {
      state.count++
    },
    switchTab (state,payload){
       state.selected = payload
    }
  }
})



