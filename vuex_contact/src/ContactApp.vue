<!--중앙집중컴포넌트-->
<template>
  <div id="container">
    <div class="page-header">
      <h1 class="text-center">연락처 관리 애플리케이션</h1>
      <p>(Dynamic Component + EventBus + Axios) </p>
    </div>
    <!--currentView :동적 컴포넌트로 사용 - 평상시에는 보이지 않고 추가, 수정, 사진 버튼을 클릭할 경우 나타나도록-->
    <component :is="currentView" :contact="contact"></component>
    <!--contactlist,paginate :동적 컴포넌트 정적으로 사용 - 항상 화면에 나타나도록-->
    <contactList :contactlist="contactlist"></contactList>
    <paginate ref="pagebuttons"
              :page-count="totalpage"
              :page-range="7"
              :margin-pages="3"
              :click-handler="pageChanged"
              :prev-text="'이전'"
              :next-text="'다음'"
              :container-class="'pagination'"
              :page-class="'page-item'">
    </paginate>
  </div>
</template>

<script>
  import Vue from 'vue';

  import ContactList from './components/ContactList';
  import AddContact from './components/AddContact';
  import UpdateContact from './components/UpdateContact';
  import UpdatePhoto from './components/UpdatePhoto';

  import CONF from './Config.js';
  import eventBus from './EventBus.js';
  import Paginate from 'vuejs-paginate';

  export default {
    name: 'app',
    components : { ContactList, AddContact, UpdateContact, UpdatePhoto, Paginate },
    //앱 전체에서 사용하는 모든 상태 데이터
    data: function() {
      return {
        currentView : null,
        //mode : 'add',
        //모든 데이터 초기상태로 세팅
        contact : { no:0, name:'', tel:'', address:'', photo:'' },
        contactlist : {
          pageno:1, pagesize: CONF.PAGESIZE, totalcount:0, contacts:[]
        }
      }
    },
    computed : {
      totalpage : function() {
        //전체페이지 계산 - 계산형 속성을 이용
        return Math.floor((this.contactlist.totalcount - 1) / this.contactlist.pagesize) + 1;
      }
    },
    //이벤트 수신 $on
    mounted : function() {
      this.fetchContacts();
      eventBus.$on("cancel", () => {
        this.currentView = null;
      });
      eventBus.$on("addSubmit", (contact) => {
        this.currentView = null;
        this.addContact(contact);
      });
      eventBus.$on("updateSubmit", (contact) => {
        this.currentView = null;
        this.updateContact(contact);
      });
      eventBus.$on("addContactForm", () => {
        this.currentView = 'addContact';
      });
      eventBus.$on("editContactForm", (no) => {
        this.fetchContactOne(no)
        this.currentView = 'updateContact';
      });
      eventBus.$on("deleteContact", (no) => {
        this.deleteContact(no);
      });
      eventBus.$on("editPhoto", (no) => {
        this.fetchContactOne(no)
        this.currentView = 'updatePhoto';
      });
      eventBus.$on("updatePhoto", (no, file) => {
        if (typeof file !=='undefined') {
          this.updatePhoto(no, file);
        }
        this.currentView = null;
      });
    },
    //서버와의 통신기능을 포함한 앱 전체에서 사용하는 모든 메서드
    methods : {
      //보여줄 페이지 변경
      pageChanged : function(page) {
        this.contactlist.pageno = page;
        this.fetchContacts();
      },
      //연락처 데이터 페이징하여 조회
      fetchContacts : function() {
        this.$axios.get(CONF.FETCH, {
          params : {
            pageno:this.contactlist.pageno,
            pagesize:this.contactlist.pagesize
          }
        })
          .then((response) => {
            this.contactlist = response.data;
          })
          .catch((ex)=> {
            console.log('fetchContacts failed', ex);
            this.contactlist.contacts = [];
          })
      },
      addContact : function(contact) {
        this.$axios.post(CONF.ADD,  contact)
          .then((response) => {
            this.contactlist.pageno = 1;
            this.fetchContacts();
          })
          .catch((ex)=> {
            console.log('addContact failed : ', ex);
          })
      },
      updateContact : function(contact) {
        this.$axios.put(CONF.UPDATE.replace("${no}", contact.no), contact)
          .then((response) => {
            this.fetchContacts();
          })
          .catch((ex) => {
            console.log('updateContact failed : ', ex);
          })
      },
      fetchContactOne : function(no) {
        this.$axios.get(CONF.FETCH_ONE.replace("${no}", no))
          .then((response) => {
            this.contact = response.data;
          })
          .catch((ex)=> {
            console.log('fetchContactOne failed', ex);
          })
      },
      deleteContact : function(no) {
        this.$axios.delete(CONF.DELETE.replace("${no}", no))
          .then((response) => {
            this.fetchContacts();
          })
          .catch((ex) => {
            console.log('delete failed', ex);
          })
      },
      updatePhoto : function(no, file) {
        var data = new FormData();
        data.append('photo', file);

        this.$axios.post(CONF.UPDATE_PHOTO.replace("${no}", no), data)
          .then((response) => {
            this.fetchContacts();
          })
          .catch((ex) => {
            console.log('updatePhoto failed', ex);
          });
      }
    },
    //다른 페이지 조회 중 새로운 연락처 추가할 경우 대비
    watch : {
      ['contactlist.pageno'] : function() {
        this.$refs.pagebuttons.selected = this.contactlist.pageno-1;
      }
    },

  }
</script>

<style scoped>
  @import url("https://cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.css");

  #container {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
