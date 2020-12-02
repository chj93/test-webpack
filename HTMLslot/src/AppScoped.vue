<template>
  <div class="parent">
    <child>
      <!-- p1 자식 컴포넌트로부터 전달받은 속성값/ slat=자식name scope=전달받을 속성 명-->
      <template slot="type1" scope="p1">  <!--scope는 해당 template 내에서만 사용 가능 -->
        <div>{{p1.cx }} + {{p1.cy}} =
          {{ parseInt(p1.cx) + parseInt(p1.cy) }}</div>
      </template>
      <template slot="type2" scope="p2">
        <div>{{p2.cx }} 더하기 {{p2.cy}} 는
          {{ parseInt(p2.cx) + parseInt(p2.cy) }}입니다.</div>
      </template>
    </child>
  </div>
</template>

<script>
  import Child from './components/ScopedSlot.vue'

  export default {
    components : { Child }
  }
</script>

<style>
  .parent { border:dashed 2px black; padding:5px; }
</style>
