<style>
* {  box-sizing: border-box;  }
ul {  margin: 0; padding: 0; }
ul li {
    cursor: pointer; position: relative; padding: 8px 8px 8px 40px;
    background: #eee; font-size: 14px;  transition: 0.2s;
    -webkit-user-select: none; -moz-user-select: none;
    -ms-user-select: none; user-select: none;
}
ul li:hover {  background: #ddd;  }
ul li.checked {
    background: #BBB;  color: #fff; text-decoration: line-through;
}
ul li.checked::before {
    content: ''; position: absolute; border-color: #fff;
    border-style: solid; border-width: 0px 1px 1px 0px;
    top: 10px; left: 16px;  transform: rotate(45deg);
    height: 8px; width: 8px;
}
.close {
    position: absolute; right: 0; top: 0;
    padding: 8px 12px 8px 12px
}
.close:hover {
    background-color: #f44336;  color: white;
}
</style>
<template>
    <ul id="todolist">
<!--        <li v-for="(a, index) in todolist" v-bind:class="checked(a.done)"
            v-on:click="doneToggle(index)">-->
      <!--mapState, mapMutations 이용: 컴포넌트 바인딩 헬퍼 메소드-->
        <li v-for="(a, index) in todolist" v-bind:class="checked(a.done)"
            v-on:click="doneToggle({index:index})">
            <span>{{ a.todo }}</span>
            <span v-if="a.done"> (완료)</span>
            <span class="close" v-on:click.stop="deleteTodo({index:index})">&#x00D7;</span>
        </li>
    </ul>
</template>
<script type="text/javascript">
  import Constant from '../constant'
  import { mapState, mapMutations} from 'vuex'
  // lodash == _.extend() 함수 이용
  import _ from 'lodash';

  export default{
/*    computed:{
      todolist(){
        return this.$store.state.todolist;
      }
    },
    methods:{
      checked : function (done) {
        if(done) return {checked:true};
        else return {checked:false};
      }
    },
    deleteTodo :function(index){
      this.$store.commit(Constant.DELETE_TODO,{index:index});
    },
    doneToggle:function(index){
      this.$store.commit(Constant.DONE_TOGGLE,{index:index});
    }*/

    //mapState, mapMutations 이용
    computed:mapState(['todolist']),
    //cheched속성의 경우 변이를 일으키지 않기 때문에 병
    methods:_.extend({
        checked(done) {합
          if (done) return {checked: true};
          else return {checked: false};
        }
    },
    mapMutations([
       Constant.DONE_TOGGLE,
       Constant.DELETE_TODO
       ])
    )
  }
</script>
