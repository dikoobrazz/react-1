import React from "react";
import cls from "./Nav.module.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className={cls.nav}>
      <div className={`${cls.item} ${cls.active}`}>
        <NavLink to="/profile" activeClassName={cls.active}>
          Profile
        </NavLink>
      </div>
      <div className={cls.item}>
        <NavLink to="/dialogs" activeClassName={cls.active}>
          Messages
        </NavLink>
      </div>
      <div className={cls.item}>
        <a href="#">News</a>
      </div>
      <div className={cls.item}>
        <a href="#">Music</a>
      </div>
      <div className={cls.item}>
        <a href="#">Settings</a>
      </div>
    </nav>
  );
};

export default Nav;
