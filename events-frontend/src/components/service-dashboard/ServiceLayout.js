import React from 'react'
import ServiceHeader from './ServiceHeader'
import ServiceSidebar from './ServiceSidebar'
import "../../styles/ServiceLayout.css";
import { Outlet } from 'react-router';
import SubCategory from '../SubCategory';

const ServiceLayout = () => {
  return (
    <div className="service--layout__container">
      <div className="service--layout__header">
        <ServiceHeader />
      </div>
      <div className="service--layout__body">
        <ServiceSidebar />
        <div className="service--children">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default ServiceLayout;
