import { usersAPI } from '../api/api'

const ADD_POST = 'ADD_POST'
const CHANGE_NEW_POST_TEXT = 'CHANGE_NEW_POST_TEXT'
const CHANGE_TITLE_TEXT = 'CHANGE_TITLE_TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
  posts: [
    {
      id: 1,
      title: 'First post',
      post: 'Some text from first post',
      likeCount: 12,
    },
    {
      id: 2,
      title: 'Second post',
      post: 'Some text from second post',
      likeCount: 19,
    },
  ],
  profile: null,
  newPostText: '',
  newTitleText: '',
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        newPostText: '',
        newTitleText: '',
        posts: [
          ...state.posts,
          {
            id: state.posts.length + 1,
            title: state.newTitleText,
            post: state.newPostText,
            likeCount: 0,
          },
        ],
      }
    }
    case CHANGE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.postMessage,
      }
    }
    case CHANGE_TITLE_TEXT:
      return {
        ...state,
        newTitleText: action.titleText,
      }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      }
    }
    default:
      return state
  }
}

export const addPost = () => ({ type: ADD_POST })

export const onPostChange = (text) => ({
  type: CHANGE_NEW_POST_TEXT,
  postMessage: text,
})

export const onTitleChange = (title) => ({
  type: CHANGE_TITLE_TEXT,
  titleText: title,
})

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
})

export const acceptUserProfile = (userId) => (dispatch) => {
  if (!userId) userId = 9
  usersAPI.getUserProfile(userId).then((response) => {
    dispatch(setUserProfile(response.data))
  })
}

export default profileReducer
