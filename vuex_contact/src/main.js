// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

//Axios Basic 예제
//import App from "./AppAxiosTest";
//연락처 app 실습 예제
import App from './ContactApp'

import axios from "axios";
//전역수준에서 promise polyfill를 사용하기위해
require('es6-promise').polyfill();

Vue.prototype.$axios=axios;
Vue.config.productionTip = false

let x = 1;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
