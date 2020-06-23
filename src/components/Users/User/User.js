import React from "react";
import "./User.css";
import { NavLink } from "react-router-dom";
import * as axios from "axios";

const User = (props) => {
  return (
    <div className="card-panel white hoverable">
      <NavLink to={"/profile/" + props.id}>
        <div className="card-action">
          <img
            src={props.photo}
            alt=""
            className="circle small responsive-img left"
          />
          <a href="#!" className="red-text right">
            {props.fullname}
          </a>
        </div>
      </NavLink>
      <p className="teal-text">{props.status}</p>
      <div className="card-action">
        {props.followed ? (
          <a
            href="#!"
            className="waves-effect waves-light btn-small red"
            onClick={() =>
              axios
                .delete(
                  `https://social-network.samuraijs.com/api/1.0/follow/${props.id}`,
                  {
                    withCredentials: true,
                    headers: {
                      "API-KEY": "fc50ce47-e3e8-4eca-a3d1-3ff99486c4e4",
                    },
                  }
                )
                .then((response) => {
                  if (response.data.resultCode === 0) {
                    props.follow(props.id);
                  }
                })
            }
          >
            Unfollow
          </a>
        ) : (
          <a
            href="#!"
            className="waves-effect waves-light btn-small"
            onClick={() =>
              axios
                .post(
                  `https://social-network.samuraijs.com/api/1.0/follow/${props.id}`,
                  {},
                  {
                    withCredentials: true,
                    headers: {
                      "API-KEY": "fc50ce47-e3e8-4eca-a3d1-3ff99486c4e4",
                    },
                  }
                )
                .then((response) => {
                  if (response.data.resultCode === 0) {
                    props.follow(props.id);
                  }
                })
            }
          >
            Follow
          </a>
        )}
        <a href="#!" className="teal-text right">
          {props.city}, {props.country}
        </a>
      </div>
    </div>
  );
};

export default User;
