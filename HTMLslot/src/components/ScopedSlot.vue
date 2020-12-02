<!--AppScoped의 자식 component-->
<template>
  <div class="child">
    X : <input type="text" v-model="x" /><br />
    Y : <input type="text" v-model="y" /><br />
    <!--부모컴포넌트로 x,y의 값 전달 -->
    <slot name="type1" :cx="x" :cy="y"></slot>
    <slot name="type2" :cx="x" :cy="y"></slot>
  </div>
</template>
<script>
  export default {
    data() {
      return { x:1, y:1 };
    }
  }
</script>
<style scoped>
  .child { padding:5px; border:solid 1px gray; }
</style>
