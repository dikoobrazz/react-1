import React from "react";
import "./Profile.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div className="container col l8">
      <div className="row" >
        <from >
          <div className="input-field col l12">
            <textarea id="post" className= "materialize-textarea"></textarea>
            <label for="post" className="title">New post</label>
          </div>
        </from>
      </div>
      <div className="row">
        <div className="container col l12">
          <div className="hide-on-small-only">
             <span className="teal-text"><h4>My posts</h4></span>
          </div>
        </div>
        <MyPosts />
      </div>
    </div>
  );
};

export default Profile;
