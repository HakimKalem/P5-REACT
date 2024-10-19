import React, { useState } from "react";
import "./ImageSlider.scss";

const ImageSlider = ({ pictures }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const showPrevious = () => {
    setActiveIndex((previousIndex) =>
      previousIndex === 0 ? pictures.length - 1 : previousIndex - 1
    );
  };

  const showNext = () => {
    setActiveIndex((previousIndex) =>
      previousIndex === pictures.length - 1 ? 0 : previousIndex + 1
    );
  };

  return (
    <div className="image-slider">
      {pictures.length > 1 && (
        <>
          <button className="slider-arrow left" onClick={showPrevious}>
            &#10094;
          </button>
          <button className="slider-arrow right" onClick={showNext}>
            &#10095;
          </button>
        </>
      )}
      <div className="slider-image-container">
        <img
          src={pictures[activeIndex]}
          alt="logement"
          className="slider-image"
        />

        <div className="image-slider-indicator">
          {activeIndex + 1}/{pictures.length}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
