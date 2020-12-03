import Vue from 'vue'
import App from './App.vue'
import TodoList from "./components/TodoList";
/*<!-- 컴포넌트 : todolist/src/ContactApp.vue-->
<!--컴포넌트 랜더링: todolist/src/main.js-->
<!--보여지는곳: todolist/index.html-->*/


new Vue({
  el: '#app',
  //render: h => h(App) //App comp를 랜더링한 결과물을  #app 요소에 출력 : ContactApp.vue
  render:h=>h(TodoList)
})

