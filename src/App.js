import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavContainer from "./components/Nav/NavContainer";

const App = (props) => {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <div className="row">
          <NavContainer />
          <Route path="/profile" render={() => <ProfileContainer />} />
          <Route path="/dialogs" render={() => <DialogsContainer />} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
