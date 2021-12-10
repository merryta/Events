import React from 'react';
import "../styles/Info.css";

const Info = ({ name, icon }) => {
  return (
    <div className="info__container">
      <span>{icon}</span>
      <p>{name}</p>
    </div>
  )
}

export default Info;
