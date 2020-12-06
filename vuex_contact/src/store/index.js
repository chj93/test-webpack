/*state, mutation, action을 이용하는 저장소 객체*/

import Vue from 'vue';
import Vuex from 'vuex';
import ES6Promise from 'es6-promise';

import state from './state.js';
import mutations from './mutations.js';
import actions from './actions.js';

ES6Promise.polyfill();
//전역에서 사용할 수 있도록
Vue.use(Vuex);

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store;
