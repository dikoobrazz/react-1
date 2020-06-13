import React from "react";
import "./Post.css";

const Post = (props) => {
  return (
    <div className="col l12">
      <div className="card-panel blue-gray">
         <span className="teal-text">
            <p>{props.message}</p>
            <p className="red-text">like: {props.like}</p>
         </span>
      </div>
   </div>
  );
};

export default Post;
