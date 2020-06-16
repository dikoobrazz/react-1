const ADD_POST = "ADD_POST";
const CHANGE_NEW_POST_TEXT = "CHANGE_NEW_POST_TEXT";
const CHANGE_TITLE_TEXT = "CHANGE_TITLE_TEXT";

let initialState = {
  posts: [
    {
      id: 1,
      title: "First post",
      post: "Some text from first post",
      likeCount: 12,
    },
    {
      id: 2,
      title: "Second post",
      post: "Some text from second post",
      likeCount: 19,
    },
  ],
  newPostText: "",
  newTitleText: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        newPostText: "",
        newTitleText: "",
        posts: [
          ...state.posts,
          {
            id: state.posts.length + 1,
            title: state.newTitleText,
            post: state.newPostText,
            likeCount: 0,
          },
        ],
      };
    }
    case CHANGE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.postMessage,
      };
    }
    case CHANGE_TITLE_TEXT:
      return {
        ...state,
        newTitleText: action.titleText,
      };
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const changeNewPostTextActionCreater = (text) => ({
  type: CHANGE_NEW_POST_TEXT,
  postMessage: text,
});

export const changeTitleTextCreator = (title) => ({
  type: CHANGE_TITLE_TEXT,
  titleText: title,
});

export default profileReducer;
