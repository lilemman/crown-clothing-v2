import React from "react";
import "./Navigation.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo/crown.svg";
const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src={Logo} alt="logo" className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/login">
            Login
          </Link>
          <img src="" alt="" />
        </div>
      </div>
    </>
  );
};

export default Navigation;
