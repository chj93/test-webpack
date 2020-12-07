<template>
  <div>
    <h1>연락처</h1>
    <div class="wrapper">
        <div class="box" v-for="c in contacts" :key="c.no">
            <!--no값을 주소 마지막에 가져가도록-->
            <!--named routes를 이용하지 않을 경우-->

            <!--<router-link v-bind:to="'/contacts/'+c.no">{{c.name}}</router-link>-->
<!--
          <router-link v-bind:to="{name:'contactsbyno',params:{no:c.no}}">
            {{c.name}}
          </router-link>
-->
          <span @click="navigate(c.no)" style='cursor:pointer'>
            {{c.name}}
          </span>


        </div>
    </div>
  </div>
</template>
<script>
import contactlist from '../ContactList';

export default {
  name: "contacts",
  data: function () {
    return {
      //참조한 contactlist값을 데이터 옵션으로 이용
      contacts: contactlist.contacts
    }
  },
  methods: {
    navigate(no) {
      if (confirm("상세정보를 보시겠습니까?")) {
        this.$router.push({name: 'contactsbyno', params:{no: no}}, function () {
          console.log("/contects2/" + no + " 이동완료");
        })
      }
    }
  }
}
</script>
<style>
.wrapper { background-color:#fff; clear:both; display:table; }
.box { float:left; background-color:#faebd7; border-radius:5px;
    padding: 10px; margin:3px; text-align:center; font-size:120%;
    width:100px; font-weight:bold; }
a:link, a:visited { text-align:center; text-decoration:none;
    display:inline-block; }
</style>
