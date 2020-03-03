// import React from "react";
// import {NavLink} from "react-router-dom";
// import "./style.css";

// const NavBar = () => {
//   return (
//       <div className="navbar">
//           <NavLink to="/">Home</NavLink>
//           <NavLink to="/signup">Sign Up</NavLink>
//           <NavLink to="/login">Login</NavLink>
//       </div>
//   );
// };

// export default NavBar;


import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      {!isAuthenticated && (
        <button onClick={() => loginWithRedirect({})}>Log in</button>
      )}

      {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
    </div>

    {/* NEW - add a link to the home and profile pages */}
    {isAuthenticated && (
      <span>
        <Link to="/">Home</Link>&nbsp;
        <Link to="/profile">Profile</Link>
      </span>
    )};
    
  );
};

export default NavBar;