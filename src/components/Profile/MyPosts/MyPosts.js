import React from "react";
import "./MyPosts.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  const postsList = props.posts.map((post) => (
    <Post
      title={post.title}
      message={post.post}
      like={post.likeCount}
      id={post.id}
    />
  ));
  return <div>{postsList}</div>;
};

export default MyPosts;
