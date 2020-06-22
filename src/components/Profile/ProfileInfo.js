import React from "react";
import "./ProfileCard.css";
import Preloader from "../common/Preloader/Preloader";

let Contacts = (props) => {
  return Object.entries(props.contacts).map(([key, val]) => {
    return (
      <li>
        <a href={!val ? "!#" : val}>
          <i className={`fa fa-${key}`}></i>
        </a>
      </li>
    );
  });
};

let ProfileInfo = (props) => {
  if (!props.profile) {
    return (
      <div className="center">
        <Preloader />
      </div>
    );
  }
  return (
    <div className="card">
      <div className="card-header center">
        <img alt="" src={props.profile.photos.large} />
      </div>
      <div className="card-content">
        <h3>{props.profile.fullName}</h3>
        <p>{props.profile.aboutMe}</p>
        {props.profile.lookingForAJob ? (
          <>
            <h4>
              <i className="material-icons teal-text">check</i>Ищу работу:
            </h4>
            <p className="italic">{props.profile.lookingForAJobDescription}</p>
          </>
        ) : null}
      </div>
      <div className="card-footer">
        <ul>
          <Contacts contacts={props.profile.contacts} />
        </ul>
      </div>
    </div>
  );
};

export default ProfileInfo;
