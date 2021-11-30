import React from 'react';
import Introduction from '../pages/Introduction';
import Workspace from '../pages/Workspace';
import Service from '../pages/Service';
import "../styles/MainContent.css";
import Contact from '../pages/Contact';

const MainContent = () => {
  return (
    <div className="main__container">
      <Introduction />
      <Workspace />
      <Service />
      <Contact />
    </div>
  )
}

export default MainContent;
