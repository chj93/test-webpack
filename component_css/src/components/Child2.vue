<template>
    <div class="main">{{msg}}</div>
</template>

<script>
    export default {
        name: "Child2",
        data(){
          return{
            msg:'child2 Bule'
          }
        }
    }
</script>

<style scoped>
/*scoped를 명시하지않을경우 같은 class명과 중복 적용됨*/
  .main{border:solid 4px #2c3e50; background-color: cadetblue;}
</style>
