import Vue from 'vue';
import Vuex from 'vuex';
import Constant from '../constant';
//Vuex를 전역에서 사용할 수 있도록
Vue.use(Vuex);

//state, nutation 정보를 전달하여 Vue.Store 객체 생성
const store = new Vuex.Store({
    state: {
        todolist : [
            { todo : "영화보기", done:false },
            { todo : "주말 산책", done:true },
            { todo : "ES6 학습", done:false },
            { todo : "잠실 야구장", done:false }
        ]
    },

  /*
    첫번째 인자 = state   : 변경하려는 데이터
    두번째 인자 = payload : 변경을 위해 필요로 하는 데이터
   */
    mutations: {
        //palyload를 통해 변경하려는 상태정보 전달받아 상태 변경
        [Constant.ADD_TODO] : (state, payload) => {
            if (payload.todo !== "") {
                state.todolist.push({ todo : payload.todo, done:false });
            }
        },
        [Constant.DONE_TOGGLE] : (state, payload) => {
            state.todolist[payload.index].done = !state.todolist[payload.index].done;
        },
        [Constant.DELETE_TODO] : (state,payload) => {
            state.todolist.splice(payload.index,1);
        }
    }
})

export default store;
