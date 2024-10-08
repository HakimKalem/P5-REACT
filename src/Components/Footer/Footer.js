import React from "react";
import "./Footer.scss";
import logo from "./logofooter.png";

const Footer = () => {
  return (
    <footer>
      <img src={logo} alt="logo Kasa" className="footer-logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
