const state = {
  profilePage: {
    posts: [
      { id: 1, post: "First post!", likeCount: 12 },
      { id: 2, post: "Second post!", likeCount: 19 },
      { id: 3, post: "Hello people...", likeCount: 25 },
      { id: 4, post: "Mutter!", likeCount: 22 },
    ],
  },
  dialogsPage: {
    messages: [
      { id: 1, message: "Hello!" },
      { id: 2, message: "How are you?" },
      { id: 3, message: "Yah!" },
      { id: 4, message: "Get with Index!" },
    ],
    dialogs: [
      { id: 1, name: "Andrey" },
      { id: 2, name: "Sveta" },
      { id: 3, name: "Sacha" },
      { id: 4, name: "Dima" },
    ],
  },
};

export default state;
