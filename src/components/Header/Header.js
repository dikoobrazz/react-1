import React from "react";
import cls from "./Header.module.css";

const Header = () => {
  return (
    <header className={cls.header}>
      <img
        src="https://img2.freepng.ru/20180315/vrq/kisspng-logo-lion-shutterstock-red-gradient-lionhead-5aab05d93512d0.9761940315211575932174.jpg"
        alt=""
      />
    </header>
  );
};

export default Header;
