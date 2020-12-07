<template>
<div>
  <div class="header">
    <h1 class="headerText">(주)OpenSG</h1>
    <nav>
      <ul>
        <li>
          <!--하이퍼링크 생성-->
          <!--named routes를 이용할 경우 문자열이 아닌 객체를 바인딩-->
          <router-link v-bind:to="{name:'home'}">Home</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <li>
          <router-link v-bind:to="{name:'contacts'}">Contacts-Dynamic</router-link>
        </li>
        <li>
          <router-link to="/contacts2">Contacts-Nest</router-link>
        </li>
      </ul>
    </nav>
  </div>

  <div class="container">
    <!--router로 매핑한 컴포넌트의 내용이 위치에 나타남-->
    <router-view></router-view>
  </div>
</div>
</template>
<script>
import Home from './components/Home.vue';
import About from './components/About.vue';
import Contacts from './components/Contacts.vue';
//vue-router 참조
import VueRouter from 'vue-router';
import ContactByNo from "./components/ContactByNo";
import Contacts2 from './components/Contacts2.vue';
import ContactByNo2 from "./components/ContactByNo2";
//각 경로별 보여줄 컴포넌트 매핑한 router객체 생성
const router = new VueRouter({
  routes : [
    { path:'/', component: Home },
    { path:'/home', component: Home, name:'home' },
    { path:'/about', component: About },
    //연락처 페이지
    { path:'/contacts', name:'contacts', component: Contacts },
    //연락처 상세보기 페이지   :no로 해당 위치에 저장된 문자열 파라미터로 값 획득
    { path:'/contacts/:no',name:'contactsbyno',  component: ContactByNo },

    { path:'/contacts2', component: Contacts2,
      children:[
        {path:':no', component:ContactByNo2}
      ]
    }

  ]
})

export default {
  name : 'app',
  router
}
</script>
<style>
@import url("https://cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.css");
.header { background-color:#faebd7;; padding: 10px 0px 0px 0px; }
.headerText { padding: 0px 20px 0px 20px; }
ul { list-style-type: none; margin: 0; padding: 0;
    overflow: hidden; background-color: #9c5c00;  }
li { float: left; }
li a { display: block; color: #fff; text-align: center;
    padding: 14px 16px; text-decoration: none;  }
li a:hover { background-color: #faebd7;; color:black; }
</style>
