import React from "react";
import "./Banner.scss";

const Banner = ({ backgroundImage }) => {
  return (
    <div className="banner">
      <div
        className="banner-home"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4)),url(${backgroundImage})`,
        }}
      >
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
    </div>
  );
};

export default Banner;
