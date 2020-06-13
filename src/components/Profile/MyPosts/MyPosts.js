import React from "react";
import "./MyPosts.css";
import Post from "./Post/Post";

let postsData = [
  { id: 1, post: "Hello! Howare you", likeCount: 12 },
  { id: 2, post: "It's my First Post", likeCount: 5 },
  { id: 3, post: "My second Post", likeCount: 19 },
];

const postsList = postsData.map( post => <Post message={post.post} like={post.likeCount} id={post.id}/>)

const MyPosts = () => {
  return (
    <div>
      {postsList}
    </div>
  );
};

export default MyPosts;
