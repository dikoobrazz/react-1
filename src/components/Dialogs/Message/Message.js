import React from "react";

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

export default Message;