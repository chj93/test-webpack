/*상태가 변경되는 상황 정의 */
/*
  첫번째 인자 = state   : 변경하려는 데이터
  두번째 인자 = payload : 변경을 위해 필요로 하는 데이터
 */
import Constant from '../constant';

//상태를 변경하는 기능만을 뽑아서...
export default {
  [Constant.ADD_CONTACT_FORM] : (state) => {
    state.contact = { no:'', name:'', tel:'', address:'', photo:'' };
    state.mode = "add";
    state.currentView = "contactForm";
  },
  [Constant.CANCEL_FORM] : (state) => {
    state.currentView = null;
  },
  //palyload를 통해 변경하려는 상태정보 전달받아 상태 변경
  [Constant.EDIT_CONTACT_FORM] : (state, payload) => {
    state.contact = payload.contact;
    state.mode = "update";
    state.currentView = "contactForm";
  },
  [Constant.EDIT_PHOTO_FORM] : (state, payload) => {
    state.contact = payload.contact;
    state.currentView = "updatePhoto";
  },
  [Constant.FETCH_CONTACTS] : (state, payload) => {
    state.contactlist = payload.contactlist;
  }
}
