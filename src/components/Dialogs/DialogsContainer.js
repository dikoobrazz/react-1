import {
  sendNewMessageActionCreator,
  changeNewMessageTextActionCreator,
} from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'

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
    // isAuth: state.auth.isAuth,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(sendNewMessageActionCreator())
    },
    changeNewMessageText: (message) => {
      dispatch(changeNewMessageTextActionCreator(message))
    },
  }
}

let AuthRedirectComponent = withAuthRedirect(Dialogs)

const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthRedirectComponent)

export default DialogsContainer
