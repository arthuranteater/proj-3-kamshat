import React from "react";
import {Navbar, NavLink} from "reactstrap";

const TopNavbar = () => {
    return (
      <div>
        <Navbar>
                <NavLink href="/">About</NavLink>
                <NavLink href="/profile">Profile</NavLink>
                <NavLink href="/login">Login</NavLink>
                <NavLink href="/signup">Signup</NavLink>
        </Navbar>

      </div>
    
    )
}

export default TopNavbar;
