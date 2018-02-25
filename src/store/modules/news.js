import * as types from '../mutation-types';
import * as api from './../api';
// state
const state = {
  'newsList': [], //所有消息
  'page':{},
  'newsloading':false,
  'isFirstLoading':0,
}

// mutations
const mutations = {
  [types.GET_ALL_NEWS](state, data,flag) {
    console.log(data);
    if(data.flag){
      state.newsList = state.newsList.concat(data.sendData.data);
      state.page = data.sendData.page;
    }else{
      state.newsList = data.sendData.data;
      state.page = data.sendData.page;
    }
  },
  [types.CHANGELOADING](state, data) {
    state.newsloading = data;
  },
  [types.ISFIRSTLOADING](state) {
    state.isFirstLoading++
  },

}

// actions
const actions = {
    getnews:({commit,state},flag)=>{ 
      if(flag&&state.newsloading||!flag){
      api.get_new_list().then(function(res){
        if(flag){
          commit(types.CHANGELOADING,false);
        }
        commit(types.ISFIRSTLOADING);
        const sendData={
           sendData:res.data,
           flag
        };
        commit(types.GET_ALL_NEWS,sendData);
      })
      
    }
  }
}

export default {
  state,
  actions,
  mutations
}