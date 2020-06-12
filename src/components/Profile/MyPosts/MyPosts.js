import React from "react";
import cls from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>New posts</div>
      <div className={cls.posts}>
        <Post />
      </div>
    </div>
  );
};

export default MyPosts;
