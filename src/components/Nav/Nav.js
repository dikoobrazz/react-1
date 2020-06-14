import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";
import Friends from "./Friends/Friends";

const Nav = (props) => {
  return (
    <div className="col l4">
      <ul className="collection z-depth-1 hoverable">
        <li>
          <NavLink
            to="/profile"
            className="collection-item waves-effect waves-teal"
          >
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dialogs"
            className="collection-item waves-effect waves-teal"
          >
            Messages
          </NavLink>
        </li>
        <li>
          <a href="#" className="collection-item waves-effect waves-teal">
            News
          </a>
        </li>
        <li>
          <a href="#" className="collection-item waves-effect waves-teal">
            Music
          </a>
        </li>
        <li>
          <a href="#" className="collection-item waves-effect waves-teal">
            Settings
          </a>
        </li>
      </ul>
      <Friends friends={props.state.friends} />
    </div>
  );
};

export default Nav;
