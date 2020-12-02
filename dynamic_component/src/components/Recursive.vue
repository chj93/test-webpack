<template>
  <ul>
    <!--서브 목록에 subs속성이 있다면 다시 tree 컴포넌트에 전달하여 하위 트리 출력-->
    <li v-for="s in subs" v-bind:class="s.type">
      {{s.name}}
      <!--:subs를 정의하여 보여줄 데이터 받아옴(about.vue에 았는 데이터)-->
      <tree :subs="s.subs"></tree>
    </li>
  </ul>
</template>

<script>
  export default {
    name : 'tree',
    props : [ 'subs' ]
  }
</script>
