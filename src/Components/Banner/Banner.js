import React from "react";
import "./Banner.scss";

const Banner = ({ backgroundImage, hideText }) => {
  return (
    <div>
      <div
        className="banner"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4)),url(${backgroundImage})`,
        }}
      >
        <h1 className={`banner-text ${hideText ? "hidden" : ""}`}>
          Chez vous, partout et ailleurs
        </h1>
      </div>
    </div>
  );
};

export default Banner;
