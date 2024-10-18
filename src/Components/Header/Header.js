import React from "react";
import "./Header.scss";
import logo from "./LOGO.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img className="logo-kasa" src={logo} alt="Logo Kasa" />
      </Link>
      <nav>
        <a href="/">ACCUEIL</a>
        <a href="/about">A PROPOS</a>
      </nav>
    </header>
  );
};

export default Header;
