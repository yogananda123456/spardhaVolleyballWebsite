import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <div>
      <header>
        <nav>
          <NavLink exact="true" to="/" activeclassname="active-link">
            <img src={`${process.env.PUBLIC_URL}/dravos.jpg`} alt="Dravos" className="nav-logo" />
          </NavLink>
          <NavLink to="/people" activeclassname="active-link">
            <div id="people">People</div>
          </NavLink>
          <NavLink to="/spardha/live" activeclassname="active-link">
            <div id="spardha">Spardha</div>
          </NavLink>
          <NavLink to="/Gallery" activeclassname="active-link">
          <NavLink to="/Gallery" activeclassname="active-link">
          <div id="gallery">Gallery</div>
          </NavLink>
          </NavLink>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;