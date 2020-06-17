import React from "react";

const Message = (props) => {
  return (
    <div className="card-panel white hoverable" key={props.id}>
      <div className="card-action right-align">
        <i className="tiny red-text right material-icons">close</i>
      </div>
      <div className="card-actions left-align">
        <i className="tiny left material-icons">chat_bubble_outline</i>
      </div>
      <p className="teal-text">{props.message}</p>
    </div>
  );
};

export default Message;

