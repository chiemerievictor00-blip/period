import React from "react"
import '../Styles/Nav.css';
import { NavLink } from "react-router-dom";

function  Nav () {
  return (
    <div className="navbar">
        <div className="logo">
            <h1>🌸Cycle Tracker</h1>
        </div>

        <div className="navlinks">
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/Tips">Tips</NavLink></li>
                <li><NavLink to="/Tracker">Tracker</NavLink></li>
            </ul>
        </div>
      
    </div>

  );

}

export default Nav
