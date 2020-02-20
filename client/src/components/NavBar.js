import React from "react";
import {NavLink, Link} from "react-router-dom";

const NavBar = () => {
  return (
      <nav>
          <Link to="/">Home</Link>
          <NavLink to="/signup">Sign Up</NavLink>
          <NavLink to="/login">Login</NavLink>
      </nav>
  );
};

export default NavBar;
