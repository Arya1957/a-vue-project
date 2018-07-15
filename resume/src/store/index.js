import Vuex from 'vuex'
import Vue from 'vue'
import objectPath from "object-path"

Vue.use(Vuex);


export default  new Vuex.Store({
  state: {
    user: {
      id: '',
      username: ''
    },
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
        title: 'xxxx',
        birthday: '2000-01-01'
      },
      workHistory: [
        {company: '', content: '我的第二份工作是'},
        {company: '', content: '我的第一份工作是'}
      ],
      education: [
        {school: 'xxxx',major: 'xxxx'}
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
        {contact: 'phone',content: '133444'},
        {contact: 'weixin',content: '638890002'}
      ],
    }
  },
  getters: {

  },
  mutations: {
    initState (state,payload) {
      Object.assign(state,payload);
    },
    increment (state) {
      state.count++
    },
    switchTab (state,payload){
       state.selected = payload;
       localStorage.setItem('data',JSON.stringify(state));
    },
    updateResume (state,{path,value}){
      objectPath.set(state.resume,path,value);
      localStorage.setItem('data',JSON.stringify(state));
    },
    setUser(state,payload){
      Object.assign(state.user,payload);
      console.log(state.user)
    },
    removeUser(state){
      state.user.id = ''
    }
  }
})

/*
let obj = {
  a: {
    b: "d",
    c: ["e", "f"],
    '\u1200': 'unicode key',
    'dot.dot': 'key',
    test: [{name: 'xxx1',content: 'test1'},{name: 'xxx2',content: 'test2'}]
  }
};
objectPath.set(obj, "a.test.1.name", "newName");
console.log(obj);
*/




