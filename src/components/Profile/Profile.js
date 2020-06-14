import React from "react";
import "./Profile.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.changeNewPostText(text);
  }

  return (
    <div className="container col l8">
      <div className="row">
        <div className="container col l12">
          <form className="col l12">
            <div className="row">
              <div className="input-field">
                <textarea
                  id="textarea1"
                  className="materialize-textarea"
                  ref={newPostElement}
                  onChange={onPostChange}
                  value={props.state.newPostText}
                />
                <label for="textarea1">New post</label>
                <div className="btn" onClick={addPost}>
                  <span>Send post</span>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="container col l12">
          <div className="hide-on-small-only">
            <span className="teal-text">
              <h4>My posts</h4>
            </span>
          </div>
        </div>
        <MyPosts posts={props.state.posts} />
      </div>
    </div>
  );
};

export default Profile;
