<template>
  <div class="container">
    <div class="header">{{headerText}}</div>
    <div class="content">
      <slot></slot>
    </div>
    <div class="footer">{{footerText}}</div>
  </div>
</template>

<script>
  export default {
    //속성으로 넘길 경우
    props : [ 'headerText', 'footerText' ]
    //content는 slot으로 넘겼으므로 props에 명시하지 않아도 됨
  }
</script>

<style scoped>
  .container { width:300px; margin:10px; padding:2px;
    border:solid 1px gray; float:left; }
  .header { padding:4px 20px 4px 20px; background-color: orange;
    color: #ffffff; text-align: center; }
  .footer { padding:4px 20px 4px 20px; background-color: #ffbe91;
    text-align:left; }
  .content { padding: 10px; height:auto; min-height: 40px;
    text-align:left; }
</style>
