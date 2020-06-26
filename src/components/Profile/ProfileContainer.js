import {
  addPost,
  onPostChange,
  onTitleChange,
  acceptUserProfile,
} from '../../redux/profile-reducer'
import ProfileClass from './ProfileClass'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'

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
    // isAuth: state.auth.isAuth,
  }
}

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

// let AuthRedirectComponent = withAuthRedirect(ProfileClass)

// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

// const ProfileContainer = connect(mapStateToProps, {
//   addPost,
//   onPostChange,
//   onTitleChange,
//   acceptUserProfile,
// })(WithUrlDataContainerComponent)

// export default ProfileContainer

export default compose(
  withAuthRedirect,
  withRouter,
  connect(mapStateToProps, {
    addPost,
    onPostChange,
    onTitleChange,
    acceptUserProfile,
  })
)(ProfileClass)
