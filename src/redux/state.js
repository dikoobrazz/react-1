let rerenderEntireTree = () => {
  console.log("State is changed!");
};

const state = {
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
};

export const addPost = () => {
  let newPost = {
    id: 3,
    post: state.profilePage.newPostText,
    likeCount: 0,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state);
};

export const changeNewPostText = (postMessage) => {
  state.profilePage.newPostText = postMessage;
  rerenderEntireTree(state);
};

export const addMessage = () => {
  let newMessage = {
    id: 3,
    message: state.dialogsPage.newMessageText,
  };
  state.dialogsPage.messages.push(newMessage);
  state.dialogsPage.newMessageText = "";
  rerenderEntireTree(state);
};

export const changeNewMessageText = (dialogMessage) => {
  state.dialogsPage.newMessageText = dialogMessage;
  rerenderEntireTree(state);
};

export let subscribe = (observer) => {
  rerenderEntireTree = observer;
};

export default state;
