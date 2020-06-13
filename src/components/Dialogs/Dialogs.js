import React from "react";
import "./Dialogs.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
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
          <div className="collection">{dialogElements}</div>
        </div>
        <div className="container col l8">{messageElements}</div>
      </div>
    </div>
  );
};

export default Dialogs;
