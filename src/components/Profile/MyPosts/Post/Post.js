import React from "react";
import "./Post.css";

const Post = (props) => {
  return (
    <div className="col l12">
      <div className="card blue-gray hoverable">
        <div class="card-content">
          <span class="card-title">{props.title}</span>
          <p>{props.message}</p>
        </div>
        <div className="card-action ">
          <i class="tiny material-icons teal-text left">thumb_up</i>
          {props.like}
          <a class="waves-effect waves-light btn-small right">More</a>
        </div>
      </div>
    </div>
  );
};

export default Post;
