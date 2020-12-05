import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Es6Promise from 'es6-promise';

Es6Promise.polyfill();

new Vue({
  store,
  el: '#app',
  render: h => h(App)
})
