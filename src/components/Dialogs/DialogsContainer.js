import React from "react";
import {
  sendNewMessageActionCreator,
  changeNewMessageTextActionCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  let state = props.store.getState().dialogsPage;

  let sendNewMessage = () => {
    props.store.dispatch(sendNewMessageActionCreator());
  };

  let onMessageChange = (message) => {
    props.store.dispatch(changeNewMessageTextActionCreator(message));
  };

  return (
    <Dialogs
      addMessage={sendNewMessage}
      changeNewMessageText={onMessageChange}
      state={state}
    />
  );
};

export default DialogsContainer;
