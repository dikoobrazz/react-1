import React from "react";
import "./User.css";

const User = (props) => {
  return (
    <div className="card-panel white hoverable">
      <div className="card-action">
        <img
          src="https://img.icons8.com/bubbles/50/000000/user-male.png"
          className="circle small responsive-img left"
        />
        <a className="red-text right">{props.fullname}</a>
      </div>
      <p className="teal-text">{props.status}</p>
      <div className="card-action">
        {props.followed ? (
          <a
            className="waves-effect waves-light btn-small red"
            onClick={() => props.follow(props.id)}
          >
            Unfollow
          </a>
        ) : (
          <a
            className="waves-effect waves-light btn-small"
            onClick={() => props.follow(props.id)}
          >
            Follow
          </a>
        )}
        <a className="teal-text right">
          {props.city}, {props.country}
        </a>
      </div>
    </div>
  );
};

export default User;
