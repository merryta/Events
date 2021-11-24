import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="header__container">
      <div className="header__title">
        <h3>Resourceful</h3>
        <div className="header__search">
          <input type="text" placeholder="Search Service" />
          🔍
        </div>
        <Link to="/auth">
          <button className="header__btn">Join</button>
        </Link>
      </div>
      <div className="header__categories">categories</div>
    </div>
  );
};

export default Header;
