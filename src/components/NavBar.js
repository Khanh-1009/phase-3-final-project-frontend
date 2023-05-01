import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "80px",
  padding: "12px",
  margin: "40px 6px 6px",
  background: "#83c41f",
  textDecoration: "none",
  color: "white",
};

function NavBar() {
  
  return (
    <div className="App">
      <NavLink 
      to="/" 
      exact 
      style={linkStyles}
      activeStyle={{
        background: "#558707",
      }}
      >
        Home
      </NavLink>
      <NavLink 
      to="/brands" 
      exact 
      style={linkStyles}
      activeStyle={{
        background: "#558707",
      }}
      >
        Brands
      </NavLink>
      <NavLink 
      to="/contact" 
      exact 
      style={linkStyles}
      activeStyle={{
        background: "#558707",
      }}
      >
        Contact
      </NavLink>
    </div>
  )
}

export default NavBar;