import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/state";

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={state}
        addPost={store.addPost.bind(store)}
        addMessage={store.addMessage.bind(store)}
        changeNewPostText={store.changeNewPostText.bind(store)}
        changeNewMessageText={store.changeNewMessageText.bind(store)}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);
