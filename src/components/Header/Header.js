import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m12 l12">
          <nav id="header_nav">
            <div className="nav-wrapper white">
              <a href="/profile" className="brand-logo teal-text">
                <i className="material-icons">settings_ethernet</i>
                React Redux
              </a>
              <ul id="nav-mobile" className="right hide-on-med-and-down ">
                <li className="red-text">
                  {props.isAuth ? (
                    props.login
                  ) : (
                    <NavLink to={"/login"} className="teal-text">
                      Login
                    </NavLink>
                  )}
                </li>
                <li>
                  <a href="!#" className="teal-text">
                    Components
                  </a>
                </li>
                <li>
                  <a href="!#" className="teal-text">
                    JavaScript
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
