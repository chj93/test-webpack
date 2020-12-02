<template>
  <div>
    <!--적용할 클래스가 하나일경우-->
    <button v-bind:class="$style.hand">Css Module 적용</button>
    <!--적용할 클래스가 여러개일경우 : 배열형태로 작성 -->
    <button v-bind:class="[$style.hand, $style.size]">Css Module 적용</button>
  </div>
</template>

<script>
    export default {
      crearted(){
        console.log(this.$style);
      }
    }
</script>

<!--
  <style module> </style>로 스타일 모듈화
  Vue인스턴스 내에서 $style을 통해 이용가능
-->
<style module>
  .hand {cursor:pointer; background-color: rosybrown; color:white;font-weight: bold;}
  .size {width:120px;line-height: 40px; margin-top:20px;}
</style>
