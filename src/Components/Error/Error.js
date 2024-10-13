import React from "react";
import { Link } from "react-router-dom";
import "./Error.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Error = () => {
  return (
    <div>
      <div className="error-body">
        <Header />
        <h1 className="error-msg">404</h1>
        <p className="alert">Oups ! La page que vous demandez n'existe pas.</p>
        <Link to="/" className="link">
          Retourner sur la page d'accueil
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Error;
