import React from "react";
import Card from "../Card/Card";
import houses from "../../houses.json";
import "./MapCard.scss";

const MapCard = () => {
  return (
    <div className="backgroundcard">
      <div className="card-map">
        {houses.map((house) => (
          <Card
            key={house.id}
            id={house.id}
            title={house.title}
            cover={house.cover}
          />
        ))}
      </div>
    </div>
  );
};

export default MapCard;
