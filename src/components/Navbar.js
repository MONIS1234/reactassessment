import React from "react";
import { Link } from "react-router-dom";
import "./styles.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>Travel Log</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>
    </nav>
  );
};
export default Navbar;
