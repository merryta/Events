import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getServices } from "../redux/action/Services";

import ServiceCard from '../components/ServiceCard';
import "../styles/AllService.css";

const AllService = () => {
  const dispatch = useDispatch();
  const { services } = useSelector((state) => state.services);
  // console.log(services);

  useEffect(() => {
    dispatch(getServices());
  }, []);
  return (
    <div className="all--service__container">
      {services.map(service => {
        return (
          <div key={service.id}>
            <ServiceCard service={service} />
          </div>
        );
      })}
    </div>
  )
}

export default AllService;
