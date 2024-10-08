import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";

const Card = ({ id, title, cover }) => {
  return (
    <Link to={`/house/${id}`} className="card-link">
      <div className="card">
        <h2>{title}</h2>
        <img src={cover} alt={title} />
      </div>
    </Link>
  );
};

export default Card;
