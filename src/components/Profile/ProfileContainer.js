import {
  addPost,
  onPostChange,
  onTitleChange,
  setUserProfile,
} from "../../redux/profile-reducer";
import ProfileClass from "./ProfileClass";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

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
    profile: state.profilePage.profile,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addPost: () => {
//       dispatch(addPostActionCreator());
//     },
//     onPostChange: (text) => {
//       dispatch(changeNewPostTextActionCreater(text));
//     },
//     onTitleChange: (title) => {
//       dispatch(changeTitleTextCreator(title));
//     },
//   };
// };

let WithUrlDataContainerComponent = withRouter(ProfileClass);

const ProfileContainer = connect(mapStateToProps, {
  addPost,
  onPostChange,
  onTitleChange,
  setUserProfile,
})(WithUrlDataContainerComponent);

export default ProfileContainer;
