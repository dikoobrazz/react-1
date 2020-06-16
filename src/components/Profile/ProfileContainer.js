import React from "react";
import {
  addPostActionCreator,
  changeNewPostTextActionCreater,
} from "../../redux/profile-reducer";
import Profile from "./Profile";

const ProfileContainer = (props) => {
  let state = props.store.getState().profilePage;

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  let onPostTextChange = (text) => {
    props.store.dispatch(changeNewPostTextActionCreater(text));
  };

  return (
    <Profile
      addPost={addPost}
      onPostChange={onPostTextChange}
      newPostText={state.newPostText}
      posts={state.posts}
    />
  );
};

export default ProfileContainer;
