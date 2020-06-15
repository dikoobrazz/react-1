const ADD_POST = "ADD_POST";
const CHANGE_NEW_POST_TEXT = "CHANGE_NEW_POST_TEXT";

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 3,
        post: state.newPostText,
        likeCount: 0,
      };
      state.posts.push(newPost);
      state.newPostText = "";
      return state;
    case CHANGE_NEW_POST_TEXT:
      state.newPostText = action.postMessage;
      return state;
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const changeNewPostTextActionCreater = (text) => ({
  type: CHANGE_NEW_POST_TEXT,
  postMessage: text,
});

export default profileReducer;
