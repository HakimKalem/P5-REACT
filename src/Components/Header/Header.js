import React from "react";
import "./Header.scss";
import logo from "./LOGO.png";
import { Link } from "react-router-dom";

const Header = () => {
  //state (ettatt,donnees)
  //comportmentts
  //affichage (return)
  return (
    <header className="header">
      <Link to="/">
        <img className="logo-kasa" src={logo} alt="Logo Kasa" />
      </Link>
      <nav>
        <a href="#Accueil">Accueil</a>
        <a href="#a-propos">A propos</a>
      </nav>
    </header>
  );
};

export default Header;
