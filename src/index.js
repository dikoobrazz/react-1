import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import state from "./redux/state";
import { addPost } from "./redux/state";
import { addMessage } from "./redux/state";
import { changeNewPostText } from "./redux/state";
import { changeNewMessageText } from "./redux/state";
import { subscribe } from "./redux/state";

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={state}
        addPost={addPost}
        addMessage={addMessage}
        changeNewPostText={changeNewPostText}
        changeNewMessageText={changeNewMessageText}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

rerenderEntireTree(state);
subscribe(rerenderEntireTree);
