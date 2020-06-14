let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, post: "First post!", likeCount: 12 },
        { id: 2, post: "Second post!", likeCount: 19 },
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
  addPost() {
    let newPost = {
      id: 3,
      post: this._state.profilePage.newPostText,
      likeCount: 0,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this.rerenderEntireTree(this._state);
  },
  changeNewPostText(postMessage) {
    this._state.profilePage.newPostText = postMessage;
    this.rerenderEntireTree(this._state);
  },
  addMessage() {
    let newMessage = {
      id: 3,
      message: this._state.dialogsPage.newMessageText,
    };
    this._state.dialogsPage.messages.push(newMessage);
    this._state.dialogsPage.newMessageText = "";
    this.rerenderEntireTree(this._state);
  },
  changeNewMessageText(dialogMessage) {
    this._state.dialogsPage.newMessageText = dialogMessage;
    this.rerenderEntireTree(this._state);
  },
  subscribe(observer) {
    this.rerenderEntireTree = observer;
  },
};

export default store;
window.store = store;

