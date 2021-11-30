import React from "react";
import { Link } from "react-router-dom";
import "../styles/ServicePage.css";

const ServicePage = () => {
  return (
    <div className="servicepage__container">
      <div className="servicepage__header">
        <Link to="/">
          <button className="servicepage__header--btn">Back Home</button>
        </Link>
        <input placeholder="Search Service 🔍" />
      </div>
      <div className="servicepage__body">
        <div className="servicepage__body--nav">A</div>
        <div className="servicepage__body--categories">B </div>
      </div>
    </div>
  );
};

export default ServicePage;
