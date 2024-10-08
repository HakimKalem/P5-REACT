import React, { useState } from "react";
import "./List.scss";

const List = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const Toggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="list">
      <div className="list-header" onClick={Toggle}>
        <h2>{title}</h2>
        <div className={`list-icon ${isExpanded ? "expanded" : ""}`}>
          <i className="fa-solid fa-chevron-up"></i>
        </div>
      </div>
      <div className={`list-body ${isExpanded ? "expanded" : ""}`}>
        {content}
      </div>
    </div>
  );
};

export default List;
