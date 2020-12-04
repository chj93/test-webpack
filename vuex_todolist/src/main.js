import Vue from 'vue'
import store from './store'
import TodoList from "./components/TodoList";


new Vue({
  //Vue 인스턴스를 생성할 때 store객체 전달 - 모든 자식컴포넌트에서 this.$store로 접근 가능해짐
  store,
  el: '#app',
  //render: h => h(App) //App comp를 랜더링한 결과물을  #app 요소에 출력 : ContactApp.vue
  render:h=>h(TodoList)
})

