import React from "react";
import cls from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>New posts</div>
      <div className={cls.posts}>
        <Post message="Hello, how are you?" like="3" />
        <Post message="It's my ferst Post!" like="5" />
      </div>
    </div>
  );
};

export default MyPosts;
