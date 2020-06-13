import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (

    <div className="col l4">
      <ul className="collection">
          <li><NavLink to="/profile" className="collection-item waves-effect waves-teal">
            Profile
          </NavLink></li>
          <li><NavLink to="/dialogs" className="collection-item waves-effect waves-teal">
            Messages
          </NavLink></li>
          <li><a href="#" className="collection-item waves-effect waves-teal">News</a></li>
          <li><a href="#" className="collection-item waves-effect waves-teal">Music</a></li>
          <li><a href="#" className="collection-item waves-effect waves-teal">Settings</a></li>
      </ul>
    </div>

  );
};

export default Nav;
