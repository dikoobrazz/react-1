import React from "react";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <NavLink to={path} className="collection-item" key={props.id}>
      <i className="small left material-icons diag_icons">faces</i>
      <span className="badge">1</span>
      {props.name}
    </NavLink>
  );
};

export default DialogItem;

