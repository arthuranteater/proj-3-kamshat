import React from "react";
import {NavLink} from "react-router-dom";
import "./style.css";

const NavBar = () => {
  return (
      <div className="navbar">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/signup">Sign Up</NavLink>
          <NavLink to="/login">Login</NavLink>
      </div>
  );
};

export default NavBar;
