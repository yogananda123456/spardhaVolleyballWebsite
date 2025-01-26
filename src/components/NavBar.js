import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <div>
      <header>
        <nav>
          <NavLink exact to="/" activeClassName="active-link"><p> DRAVOS </p></NavLink>
          <div id="people"> People</div>
          <NavLink to="/spardha" activeClassName="active-link">
            <div id="spardha">spardha</div>
          </NavLink>
          <div id="gallery">Gallery</div>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;