import { rerenderEntireTree } from "../render";

const state = {
  profilePage: {
    posts: [
      { id: 1, post: "First post!", likeCount: 12 },
      { id: 2, post: "Second post!", likeCount: 19 },
    ],
  },
  dialogsPage: {
    messages: [
      { id: 1, message: "Hello!" },
      { id: 2, message: "How are you?" },
    ],
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

export let addPost = (postMessage) => {
  let newPost = {
    id: 3,
    post: postMessage,
    likeCount: 0,
  };
  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state);
};

export let addMessage = (message) => {
  let newMessage = {
    id: 3,
    message: message,
  }
  state.dialogsPage.messages.push(newMessage);
  rerenderEntireTree(state);
}

export default state;
