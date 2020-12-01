<template>
    <div class="main">{{msg}}</div>
</template>

<script>
    export default {
        name: "Child1",
        data(){
          return{
            msg:'child1 pink'
          }
        }
    }
</script>

<style scoped>
  /*scoped를 명시하지않을경우 같은 class명과 중복 적용됨*/
  .main{border: solid 2px rosybrown; background-color: antiquewhite;}
</style>
