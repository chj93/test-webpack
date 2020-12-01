<!--부모요소 ==Child3에 적용된 css 하위요소 Child4에도 적용 됨-->
<template>
  <div class="main test">
    {{msg}}
    <child4/>
  </div>
</template>
<script>
  import Child4 from './Child4.vue'

  export default {
    name: 'child3',
    components : { Child4 },
    data () {
      return {
        msg: 'Child3 yellow'
      }
    }
  }
</script>
<style scoped>
  .main { border:solid 1px black; background-color: darkkhaki; }
  .test { padding:10px; text-decoration: underline; border:solid 1px black; }
</style>
