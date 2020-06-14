// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
import state from "./redux/state";
// import { addPost } from "./redux/state";
import { rerenderEntireTree } from "./render";

// addPost("Hey! its addPost");

// export let rerenderEntireTree = () => {
//   ReactDOM.render(
//     <React.StrictMode>
//       <App state={state} addPost={addPost} />
//     </React.StrictMode>,
//     document.getElementById("root")
//   );
// };

rerenderEntireTree(state);
