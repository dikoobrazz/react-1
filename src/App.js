import React from "react";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

const App = (props) => {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <div className="row">
          <Nav state={props.state.sideBar} />
          {/* <Route path="/profile" component={Profile} /> */}
          {/* <Route path="/dialogs" component={Dialogs} /> */}

          <Route
            path="/profile"
            render={() => (
              <Profile
                state={props.state.profilePage}
                addPost={props.addPost}
                changeNewPostText={props.changeNewPostText}
              />
            )}
          />
          <Route
            path="/dialogs"
            render={() => (
              <Dialogs
                state={props.state.dialogsPage}
                addMessage={props.addMessage}
                changeNewMessageText={props.changeNewMessageText}
              />
            )}
          />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
