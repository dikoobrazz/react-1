import React from "react";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <div className="row">
          <Nav state={props.store.getState().sideBar} />
          <Route
            path="/profile"
            render={() => <ProfileContainer store={props.store} />}
          />
          <Route
            path="/dialogs"
            render={() => <DialogsContainer store={props.store} />}
          />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
