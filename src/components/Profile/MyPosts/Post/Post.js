import React from "react";
import "./Post.css";

const Post = (props) => {
  return (
    <div className="col l12">
      <div className="card blue-gray hoverable">
        <div className="card-content">
          <span className="card-title">{props.title}</span>
          <p>{props.message}</p>
        </div>
        <div className="card-action ">
          <i className="tiny material-icons teal-text left">thumb_up</i>
          {props.like}
          <a href="!#" className="waves-effect waves-light btn-small right">
            More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Post;
