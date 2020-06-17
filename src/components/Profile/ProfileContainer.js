import {
  addPostActionCreator,
  changeNewPostTextActionCreater,
  changeTitleTextCreator,
} from "../../redux/profile-reducer";
import Profile from "./Profile";
import { connect } from "react-redux";

// const ProfileContainer = (props) => {
//   let state = props.store.getState().profilePage;

//   let addPost = () => {
//     props.store.dispatch(addPostActionCreator());
//   };

//   let onPostTextChange = (text) => {
//     props.store.dispatch(changeNewPostTextActionCreater(text));
//   };

//   return (
//     <Profile
//       addPost={addPost}
//       onPostChange={onPostTextChange}
//       newPostText={state.newPostText}
//       posts={state.posts}
//     />
//   );
// };

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
    newTitleText: state.profilePage.newTitleText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    onPostChange: (text) => {
      dispatch(changeNewPostTextActionCreater(text));
    },
    onTitleChange: (title) => {
      dispatch(changeTitleTextCreator(title));
    },
  };
};

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;
