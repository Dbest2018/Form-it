import React from "react";
import "./Header.css";

const Header = ({ title, text }) => {
  return (
    <div className="header">
      <div className="header__title">{title}</div>
      <div className="header__text">{text}</div>
    </div>
  );
};

export default Header;
