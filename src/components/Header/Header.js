import React from "react";
import "./Header.css";

const Header = () => {
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
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                  <a
                    id="materialize"
                    href="https://materializecss.com"
                    className="red-text"
                  >
                    end material design
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
