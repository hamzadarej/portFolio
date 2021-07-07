import React from 'react'
import { Link } from "react-router-dom";
function Navbar() {
    return (
        
    <nav>
      <ul>
        
      <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/Skills">
          <li>Skills</li>
        </Link>
        <Link to="/Projects">
          <li>Projects</li>
        </Link>
        <Link to="/Contact">
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
        
    )
}

export default Navbar

