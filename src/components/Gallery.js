import React from 'react';
import NavBar from './NavBar';
import './Gallery.css';


function Gallery() {
  return (
    <div>
        <header>
            <NavBar />
        </header>
        <div className="gallery-container">
        <div className="gallery">Inter-IIT 2024</div>
        <div className="gallery">Farewell 2024</div>
        <div className="gallery">Spardha 2025</div>
        </div>
    </div>
  );
}

export default Gallery;