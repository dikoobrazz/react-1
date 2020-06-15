import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebsrReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
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
    },
    dialogsPage: {
      messages: [
        { id: 1, message: "Hello!" },
        { id: 2, message: "How are you?" },
      ],
      newMessageText: "",
      dialogs: [
        { id: 1, name: "Andrey" },
        { id: 2, name: "Sveta" },
        { id: 3, name: "Sacha" },
        { id: 4, name: "Dima" },
      ],
    },
    sideBar: {
      friends: [
        { id: 1, name: "John" },
        { id: 2, name: "Mike" },
      ],
    },
  },
  getState() {
    return this._state;
  },
  rerenderEntireTree() {
    console.log("State is changed!");
  },
  subscribe(observer) {
    this.rerenderEntireTree = observer;
  },
  // _addPost() {
  //   let newPost = {
  //     id: 3,
  //     post: this._state.profilePage.newPostText,
  //     likeCount: 0,
  //   };
  //   this._state.profilePage.posts.push(newPost);
  //   this._state.profilePage.newPostText = "";
  //   this.rerenderEntireTree(this._state);
  // },
  // _changeNewPostText(postMessage) {
  //   this._state.profilePage.newPostText = postMessage;
  //   this.rerenderEntireTree(this._state);
  // },
  // _addMessage() {
  //   let newMessage = {
  //     id: 3,
  //     message: this._state.dialogsPage.newMessageText,
  //   };
  //   this._state.dialogsPage.messages.push(newMessage);
  //   this._state.dialogsPage.newMessageText = "";
  //   this.rerenderEntireTree(this._state);
  // },
  // _changeNewMessageText(dialogMessage) {
  //   this._state.dialogsPage.newMessageText = dialogMessage;
  //   this.rerenderEntireTree(this._state);
  // },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sideBar = sidebsrReducer(this._state.sideBar, action);

    this.rerenderEntireTree(this._state);

    // switch (action.type) {
    //   case ADD_POST:
    //     this._addPost();
    //     break;
    //   case CHANGE_NEW_POST_TEXT:
    //     this._changeNewPostText(action.postMessage);
    //     break;
    //   case ADD_MESSAGE:
    //     this._addMessage();
    //     break;
    //   case CHANGE_NEW_MESSAGE_TEXT:
    //     this._changeNewMessageText(action.dialogMessage);
    //     break;
    //   default:
    //     console.log("action undefined");
    // }
  },
};

export default store;
window.store = store;
