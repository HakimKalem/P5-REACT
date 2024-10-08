import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import houses from "../../houses.json";
import "./House.scss";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import ImageSlider from "../../Components/ImageSlider/ImageSlider";
import List from "../../Components/List/List";
//import NotFound from "../../Components/NotFound/NotFound";

const House = () => {
  const { id } = useParams();
  const [house, setHouse] = useState(null);

  useEffect(() => {
    const pickHouse = houses.find((item) => item.id === id);
    setHouse(pickHouse);
  }, [id]);

  if (!house) return console.error();

  return (
    <div className="house-page">
      <Header />
      <div className="house-container">
        <ImageSlider pictures={house.pictures} />

        <div className="house-info">
          <div className="house-header">
            <h1 className="house-title">{house.title}</h1>
            <p className="house-location">{house.location}</p>

            <div className="tags-container">
              {house.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="host-rating">
            <div className="host">
              <span>
                {house.host.name.split(" ")[0]}
                <br />
                {house.host.name?.split(" ")[1] || ""}
              </span>
              <img
                src={house.host.picture}
                alt={`${house.host.name}`}
                className="host-picture"
              />
            </div>

            <div className="rating-container">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <span
                    key={index}
                    className={`star ${
                      index < house.rating ? "star--filled" : "star--empty"
                    }`}
                    aria-label={`Rating: ${
                      index < house.rating ? "Filled" : "Empty"
                    } star`}
                  >
                    <i className="fa-solid fa-star"></i>
                  </span>
                ))}
            </div>
          </div>
        </div>
        <div className="labels">
          <List title="Description" content={house.description} />
          <List
            title="Équipements"
            content={
              <ul className="equip-list">
                {house.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            }
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default House;
