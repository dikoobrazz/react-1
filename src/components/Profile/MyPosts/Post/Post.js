import React from "react";
import "./Post.css";

const Post = (props) => {
  return (
    <div className="col l12">
      <div className="card-panel blue-gray hoverable">
        <div className="teal-text">
          <div>{props.message}</div>
          <p className="red-text">like: {props.like}</p>
        </div>
        <div className="card-action right-align">
          <a class="waves-effect waves-light btn-small">More</a>
        </div>
      </div>
    </div>
  );
};

export default Post;
