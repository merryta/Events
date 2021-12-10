import React from 'react';
import "../styles/ContentRoutes.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Transport from '../pages/Transport';
import Home from '../pages/Home';
import Auth from './Auth';
import ServiceDashboard from './service-dashboard';
import Warehouse from '../pages/Warehouse';
import AllService from '../pages/AllService';
import LoadSubCategories from './LoadSubCategories';
import SubCategory from './SubCategory';


const ContentRoutes = () => {
  return (
    <div className="routes__container">
      <Router>
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="auth" element={<Auth />} />
          <Route path="service-dashboard" element={<ServiceDashboard />}>
            <Route path="transport" element={<Transport />} />
            <Route path="warehouse" element={<Warehouse />} />
            <Route path="" element={<AllService />} />
            <Route path=":subcategoryId" element={<SubCategory />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default ContentRoutes;
