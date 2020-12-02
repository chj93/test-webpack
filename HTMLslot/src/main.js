import Vue from 'vue'
import App from './App.vue'   // slot basic
import AppNamed from './AppNamed'    // named slot
import AppScoped from "./AppScoped";

new Vue({
  el: '#app',
  //render: h => h(App)       // slot basic
  //render: h => h(AppNamed)  // named slot
  render: h => h(AppScoped)   // scoped slot
})
