import React from "react";
import "./Dialogs.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <NavLink to={path} className="collection-item" key={props.id}>
      <i className="small left material-icons diag_icons">account_circle</i>
      <span className="badge">1</span>
      {props.name}
    </NavLink>
  );
};

const Message = (props) => {
  return (
    <div className="card-panel white" key={props.id}>
      <span className="card-title">
        <i className="small left material-icons">chat_bubble_outline</i>
      </span>
      <p className="teal-text">{props.message}</p>
    </div>
  );
};

let dialogsData = [
  { id: 1, name: "Andrey" },
  { id: 2, name: "Sveta" },
  { id: 3, name: "Sacha" },
  { id: 4, name: "Dima" },
];

let messagesData = [
  { id: 1, message: "Hello!" },
  { id: 2, message: "How are you?" },
  { id: 3, message: "Yah!" },
  { id: 4, message: "Get with " },
];

const dialogElements = dialogsData.map( el => <DialogItem name={el.name} id={el.id} /> )

const messageElements = messagesData.map( el => <Message message={el.message} id={el.id} />)

const Dialogs = () => {
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
          <div className="collection">
            {dialogElements}
          </div>
        </div>
        <div className="container col l8">
          {messageElements}
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
