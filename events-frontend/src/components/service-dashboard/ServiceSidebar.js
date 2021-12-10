import React from 'react';
import { Link } from 'react-router-dom';
import "../../styles/ServiceSidebar.css";
import LoadSubCategories from '../LoadSubCategories';
import { BsStars } from "react-icons/bs";

const ServiceSidebar = () => {
  return (
    <div className="service--sidebar__container">
      <div className="service--sidebar__all">
        <Link to="" className="service--sidebar__link">
          <span>
            <BsStars />
          </span>
          <p>All</p>
        </Link>
      </div>
      <div>
        <LoadSubCategories />
      </div>
    </div>
  );
}

export default ServiceSidebar;