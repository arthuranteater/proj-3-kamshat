import React from "react";
import {NavLink} from "react-router-dom";

const NavBar = () => {
  return (
      <div className="navbar">
          <NavLink to="/">About</NavLink>
          <NavLink to="/profile">Profile</NavLink>
          <NavLink to="/signup">Sign Up</NavLink>
          <NavLink to="/login">Login</NavLink>
      </div>
  );
};

export default NavBar;


