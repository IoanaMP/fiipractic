import React from "react";
import Logo from "../components/Logo";
import Nav from "./Nav";
import "../styles/Header.scss";

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="logoContainer">
        <Logo name="My React App" />
      </div>
      <div className="navContainer">
        <Nav />
      </div>
    </div>
  );
};
export default Header;
