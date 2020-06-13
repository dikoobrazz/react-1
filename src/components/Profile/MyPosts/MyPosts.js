import React from "react";
import "./MyPosts.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (

    <div>
      <Post message="Hello, how are you?" like="3" />
      <Post message="It's my ferst Post!" like="5" />
    </div>

  );
};

export default MyPosts;
