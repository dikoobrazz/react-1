import React from "react";
import Friend from "./Friend/Friend";

const Friends = (props) => {
  const friendList = props.friends.map( fr => <Friend name={fr.name}/>)
  return (
    <ul className="collapsible">
      <li>
        <div className="collapsible-header">
          <i className="material-icons">mood</i>
          Friends
          <span className="badge">{props.friends.length}</span></div>
        <div className="collapsible-body collection">
            {friendList}
        </div>
      </li>
    </ul>
  )
};

export default Friends;