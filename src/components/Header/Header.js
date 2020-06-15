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
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
