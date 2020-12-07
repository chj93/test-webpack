<!--contacts.vue 에서 contactbyno.vuef로 변경-->
<template>
  <div>
    <h1>연락처 상세</h1>
    <div >
        <table class="detail table table-bordered">
            <tbody>
            <tr class="active">
                <td>일련번호</td>
                <td>{{contact.no}}</td>
            </tr>
            <tr class="active">
                <td>이름</td>
                <td>{{contact.name}}</td>
            </tr>
            <tr class="active">
                <td>전화</td>
                <td>{{contact.tel}}</td>
            </tr>
            <tr class="active">
                <td>주소</td>
                <td>{{contact.address}}</td>
            </tr>
            </tbody>
        </table>
    </div>
  </div>
</template>

<script>
import contactlist from '../ContactList';

export default {
    name : 'contactbyno',
    data : function() {
        return {
            no : 0,
            contacts : contactlist.contacts
        }
    },
    //load되는 event hool(created) 문자열 값 획득하여 no 변수에 저장
    created : function() {
        this.no = this.$route.params.no;
        //쿼리 문자열을 이용한 요청인 경우 this.$route.query.keyword
    },
    //no에 해당하는 연락처 정보를 필터링하여 리턴
    watch : {
      '$route' : function(to, from) {
        this.no = to.params.no;
      }
    },
    computed : {
        contact : function() {
            var no = this.no;
            var arr = this.contacts.filter(function(item, index) {
                return item.no == no;
            });
            if (arr.length == 1)   return arr[0];
            else   return {};
        }

    }
}
</script>

<style>
table.detail { width:400px; }
</style>
