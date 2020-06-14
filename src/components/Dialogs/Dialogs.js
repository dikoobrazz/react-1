import React from "react";
import "./Dialogs.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let newMessage = React.createRef();

  let sendNewMessage = () => {
    props.addMessage();
    props.changeNewMessageText("");
  };

  let onMessageChange = () => {
    let message = newMessage.current.value;
    props.changeNewMessageText(message);
  };

  const dialogElements = props.state.dialogs.map((el) => (
    <DialogItem name={el.name} id={el.id} />
  ));
  const messageElements = props.state.messages.map((el) => (
    <Message message={el.message} id={el.id} />
  ));

  return (
    <div className="container col l8">
      <nav id="dialogs_nav">
        <div className="nav-wrapper white">
          <span id="dialogs_logo" className="brand-logo red-text">
            Dialogs
          </span>
        </div>
      </nav>
      <div className="row">
        <div className="container col l4">
          <div className="collection z-depth-1 hoverable">{dialogElements}</div>
        </div>
        <div className="container col l8">
          <form className="col l12">
            <div className="row">
              <div className="input-field">
                <textarea
                  id="textarea1"
                  className="materialize-textarea"
                  ref={newMessage}
                  onChange={onMessageChange}
                  value={props.state.newMessageText}
                />
                <label for="textarea1">New message</label>
                <div className="btn" onClick={sendNewMessage}>
                  <span>Send message</span>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="container col l8">{messageElements}</div>
      </div>
    </div>
  );
};

export default Dialogs;
