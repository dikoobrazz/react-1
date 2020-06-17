import {
  sendNewMessageActionCreator,
  changeNewMessageTextActionCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

// const DialogsContainer = (props) => {
//   let state = props.store.getState().dialogsPage;

//   let sendNewMessage = () => {
//     props.store.dispatch(sendNewMessageActionCreator());
//   };

//   let onMessageChange = (message) => {
//     props.store.dispatch(changeNewMessageTextActionCreator(message));
//   };

//   return (
//     <Dialogs
//       addMessage={sendNewMessage}
//       changeNewMessageText={onMessageChange}
//       state={state}
//     />
//   );
// };

let mapStateToProps = (state) => {
  return {
    state: state.dialogsPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(sendNewMessageActionCreator());
    },
    changeNewMessageText: (message) => {
      dispatch(changeNewMessageTextActionCreator(message));
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
