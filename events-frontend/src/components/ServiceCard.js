import React from 'react';
import "../styles/ServiceCard.css";
import Item from './Item';

const ServiceCard = ({service}) => {
  return (
    <div className="service--card__container">
      {service.map(item => {
        return (
          <Item item={item} />
        )
      })}
    </div>
  )
}

export default ServiceCard;
