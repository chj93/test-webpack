<template>
  <div>
    <div class="header">
      <h1 class="headerText">(주) OpenSG</h1>
      <nav>
        <ul>
          <li>
            <!--요소를 클릭할때마다 changMenu method를 이용해 데이터 속성 변경시킴-->
            <a href="#" @click="changeMenu('home')">Home</a>
          </li>
          <li>
            <a href="#" @click="changeMenu('about')">About</a>
          </li>
          <li>
            <a href="#" @click="changeMenu('contact')">Contact</a>
          </li>
        </ul>
      </nav>
    </div>

    <div class="container">
      <!--<keep-alive> : 정적 콘텐츠일경우 감싸주면 매번실행하지 x-->
      <keep-alive include="about,contact"> <!--about,contact만 매번실행x-->
        <!--보여줄 컴포넌트 지정-->
        <component v-bind:is="currentView"></component>
      <!--</keep-alive>-->
      </keep-alive>
    </div>
  </div>
</template>
<script>
  import Home from './components/Home.vue';
  import About from './components/About.vue';
  import Contact from './components/Contact.vue';

  export default {
    components : { Home, About, Contact },
    data() {
      //보여줄 컴포넌트 지정
      return { currentView : 'home' }
    },
    methods : {
      changeMenu(view) {
        this.currentView = view;
      }
    }
  }
</script>
<style scoped>
  .header { background-color: beige; padding: 10px 0px 0px 0px; }
  .headerText { padding: 0px 20px 0px 20px; }
  ul { list-style-type: none; margin: 0; padding: 0;
    overflow: hidden; background-color: purple;  }
  li { float: left; }
  li a { display: block; color: yellow; text-align: center;
    padding: 14px 16px; text-decoration: none;  }
  li a:hover { background-color: aqua; color:black; }
</style>
